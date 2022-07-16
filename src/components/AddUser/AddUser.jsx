import React, { useState } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import Styles from "./AddUser.module.scss";

function AddUser(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  function addUserHandler(event) {
    event.preventDefault();
    console.log(enteredName, enteredAge);
  }
  function nameChangeHandler(event) {
    setEnteredName(event.target.value);
  }
  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  return (
    <Card className={Styles.input_wrapper}>
      <form onSubmit={addUserHandler}>
        <label className={Styles.input_label} htmlFor="name">
          Username
        </label>
        <input
          className={Styles.input_control}
          id="name"
          type="text"
          onChange={nameChangeHandler}
        />
        <label className={Styles.input_label} htmlFor="age">
          Age (Years)
        </label>
        <input
          className={Styles.input_control}
          id="age"
          type="number"
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add</Button>
      </form>
    </Card>
  );
}

export default AddUser;
