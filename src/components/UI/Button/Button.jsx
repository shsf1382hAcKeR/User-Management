import React from "react";
import Styles from "./Button.module.scss";

function Button(props) {
  return (
    <button
      className={Styles.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
