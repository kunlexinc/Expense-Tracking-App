import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log("The only only");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button onClick={clickHandler}>change title</button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
