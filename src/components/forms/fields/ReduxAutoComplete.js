import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const ReduxAutoComplete = ({
  label,
  input,
  selectOptions,
  children,
  meta: { touched, error },
  ...custom
}) => {
  return (
    <TextField
      select
      label={label}
      error={touched && error ? true : false}
      helperText={touched && error}
      fullWidth={true}
      {...input}
      {...custom}
    >
      {selectOptions.map(option => (
        <MenuItem key={option.id} value={option.id}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default ReduxAutoComplete;
