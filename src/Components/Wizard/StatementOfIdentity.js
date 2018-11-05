import React from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import validate from "../validate";

import StatementOfIdentityIndividual from "./StatementOfIdentityIndividual";
import StatementOfIdentityCorporation from "./StatementOfIdentityCorporation";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span className="text-danger">{error}</span> : false;

let StatementOfIdentity = props => {
  const { hasTitleAsValue, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>This property is owned by an:</label>
        <div className="form-group">
          <label>
            <Field
              name="titleAs"
              component="input"
              type="radio"
              value="individual"
            />{" "}
            Individual
          </label>{" "}
          <label>
            <Field
              name="titleAs"
              component="input"
              type="radio"
              value="entity"
            />{" "}
            Entity
          </label>
          <Field name="titleAs" component={renderError} />
        </div>
      </div>
      {hasTitleAsValue === "individual" && <StatementOfIdentityIndividual />}
      {hasTitleAsValue === "entity" && <StatementOfIdentityCorporation />}
      <div>
        <button type="submit" className="next btn btn-primary">
          Next
        </button>
      </div>
    </form>
  );
};

const selector = formValueSelector("wizard"); // <-- same as form name
StatementOfIdentity = connect(state => {
  const hasTitleAsValue = selector(state, "titleAs");
  return {
    hasTitleAsValue
  };
})(StatementOfIdentity);

StatementOfIdentity = reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(StatementOfIdentity);

export default StatementOfIdentity;
