import { formatNumber } from '../utils/utils';

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount (SEK)</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{formatNumber(expense.amount)}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className='btn btn-outline-danger'
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className='fw-bold'>
          <td>Total</td>
          <td>
            {formatNumber(
              expenses.reduce((acc, expense) => expense.amount + acc, 0)
            )}
            &thinsp;SEK
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};
export default ExpenseList;
