import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const yearChangeHandler = (selectedYear) => {
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onYearChange={yearChangeHandler} />

      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
