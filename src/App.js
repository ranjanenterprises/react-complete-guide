import React, { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Chart from "./components/Chart/Chart";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car insurance",
    amount: 234.65,
    date: new Date(2020, 3, 15),
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
    date: new Date(2020, 4, 16),
  },
  {
    id: "e4",
    title: "Mobile insurance",
    amount: 12.5,
    date: new Date(2021, 7, 21),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("Inside App.js");
    console.log(expense);
    //setExpenses([...expenses, expense]);

    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    });
  };

  const yearChangeHandler = () => {
    console.log("Year has been changed");
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Chart />
      <Expenses expenses={expenses} onYearChange={yearChangeHandler} />
    </div>
  );
}

export default App;
