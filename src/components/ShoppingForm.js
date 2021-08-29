import classes from "./ShoppingForm.module.css";
import Button from "./UI/Button";
import React, { useState } from "react";

const ShoppingForm = (props) => {
  const [enteredName, setState] = useState("");
  const inputHandler = (event) => {
    setState(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newInfo = {
      name: enteredName,
      id: Math.round(Math.random().toString() * 100),
    };
    props.onSave(newInfo);
    setState("");
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        placeholder="Введите продукт"
        type="text"
        onChange={inputHandler}
        value={enteredName}
        className={classes.input}
      />

      <Button type="submit" >Добавить</Button>
    </form>
  );
};

export default ShoppingForm;
