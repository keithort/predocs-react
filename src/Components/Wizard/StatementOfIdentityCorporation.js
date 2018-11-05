import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import renderField from "../renderField";

const StatementOfIdentityIndividual = () => {
  return (
    <>
      <h3>Corporation</h3>
      <Field
        name="entityName"
        type="text"
        component={renderField}
        label="Entity Name"
      />
    </>
  );
};

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(StatementOfIdentityIndividual);
