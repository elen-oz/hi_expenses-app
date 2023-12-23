import { useState } from 'react';
import ExpenseList from './expencse-tracker/components/ExpenseList';

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 2, description: 'fff', amount: 30, category: 'Utilities' },
    { id: 3, description: 'eee', amount: 510, category: 'Utilities' },
    { id: 4, description: 'ggg', amount: 140, category: 'Utilities' },
  ]);

  return (
    <ExpenseList
      expenses={expenses}
      onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
    />
  );
};

export default App;
