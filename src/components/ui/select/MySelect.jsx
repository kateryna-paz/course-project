import React from "react";
import classes from "./MySelect.module.css";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  const renderedOptions = options.map((option) => {
    return (
      <option
        style={{ lineHeight: "20px" }}
        value={option.value}
        key={option.value}
      >
        {option.name}
      </option>
    );
  });
  return (
    <div>
      <select
        className={classes.mySelect}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option className={classes.myOption} disabled value="">
          {defaultValue}
        </option>
        {renderedOptions}
      </select>
    </div>
  );
};

export default MySelect;
