import { useState } from 'react';
import ExpenseList from './expencse-tracker/components/ExpenseList';
import ExpenseFilter from './expencse-tracker/components/ExpenseFilter';
import ExpenseForm from './expencse-tracker/components/ExpenseForm';
import categories from './expencse-tracker/categories';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 2, description: 'fff', amount: 30, category: 'Groceries' },
    { id: 3, description: 'eee', amount: 510, category: 'Utilities' },
    { id: 4, description: 'ggg', amount: 140, category: 'Entertainment' },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className='mb-5'>
        <ExpenseForm />
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
    </>
  );
};

export default App;
