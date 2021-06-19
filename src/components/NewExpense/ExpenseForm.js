import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpemseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "dd/mm/yyyy",
  }); */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /* setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    }); */

    /*  setUserInput((previousState) => {
      return { ...previousState, enteredTitle: event.target.value };
    }); */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /* setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    }); */
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /* setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    }); */
  };

  const submitHander = (event) => {
    console.log("Form details have been submitted");
    event.preventDefault();

    const expense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expense);

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHander}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="1970-01-01"
            max="2100-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpemseForm;
