import React, { useState } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import Styles from "./AddUser.module.scss";

import Wrapper from "../Helpers/Wrapper";

function AddUser(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  function addUserHandler(event) {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      })
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    setEnteredAge('');
    setEnteredName('');
  }

  function nameChangeHandler(event) {
    setEnteredName(event.target.value);
  }
  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }
  function errorHandler() {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={Styles.input_wrapper}>
        <form onSubmit={addUserHandler}>
          <label className={Styles.input_label} htmlFor="name">
            Username
          </label>
          <input
            className={Styles.input_control}
            id="name"
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          />
          <label className={Styles.input_label} htmlFor="age">
            Age (Years)
          </label>
          <input
            className={Styles.input_control}
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
