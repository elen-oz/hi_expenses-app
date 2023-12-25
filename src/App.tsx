import { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseForm';
import listOfExpenses from './utils/expenses';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const [expenses, setExpenses] = useState(listOfExpenses);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className='container-sm custom-sm-container'>
      <h2 className='my-3 text-center'>Calculate Your Expenses</h2>
      <div className='mb-5'>
        <ExpenseForm
          onSubmit={(newExpense) =>
            setExpenses([
              ...expenses,
              { ...newExpense, id: expenses.length + 1 },
            ])
          }
        />
      </div>
      <div className='mb-3'>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
};

export default App;
