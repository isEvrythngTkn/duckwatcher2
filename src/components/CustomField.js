import React from 'react';
import _ from 'lodash';
import { Field } from 'formik';

const ErrorComponent = ({ children }) => {
  return (
    <div className="invalid-feedback">
      {children}
    </div>
  );
}

export default ({name, type, label, component, selectOptions, placeholder, error}) => {
  let field;

  if (type === "select" && !_.isEmpty(selectOptions)) {
    let optionItems = selectOptions.map((option) => {
      return <option key={option} value={option}>{_.capitalize(option)}</option>
    });

    field = (
      <Field component="select" name={name} className="form-control">
        <option value> -- select an option -- </option>
        {optionItems}
      </Field>
    );
  } else {
    field = <Field component={component} type={type} name={name} className="form-control" placeholder={placeholder} />
  }

  return (
    <div className="form-group">
      <label>{label}</label>
      {field}
      { error && <ErrorComponent>{error}</ErrorComponent> }
    </div>
  );
}