import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car insurance",
      amount: 234.65,
      date: new Date(2021, 3, 15),
    },
    {
      id: "e2",
      title: "Home insurance",
      amount: 1234.0,
      date: new Date(2021, 5, 17),
    },
    {
      id: "e3",
      title: "Life insurance",
      amount: 34.21,
      date: new Date(2021, 4, 16),
    },
    {
      id: "e4",
      title: "Mobile insurance",
      amount: 12.5,
      date: new Date(2021, 7, 21),
    },
  ];

  const addExpenseHandler = (expenses) => {
    console.log("Inside App.js");
    console.log(expenses);
  };

  const yearChangeHandler = () => {
    console.log("Year has been changed")
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} onYearChange={yearChangeHandler} />
    </div>
  );
}

export default App;
