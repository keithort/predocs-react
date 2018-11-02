import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate";
import renderField from "../renderField";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span className="text-danger">{error}</span> : false;

const ProfessionalInformation = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        className="form-control"
        type="email"
        component={renderField}
        label="Email"
      />
      <div>
        <label>Sex</label>
        <div className="form-group">
          <label>
            <Field name="sex" component="input" type="radio" value="male" />{" "}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />{" "}
            Female
          </label>
          <Field name="sex" component={renderError} />
        </div>
      </div>
      <div>
        <button
          type="button"
          className="previous btn btn-outline-primary"
          onClick={previousPage}
        >
          Previous
        </button>
        <button type="submit" className="next btn btn-primary">
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "seller",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(ProfessionalInformation);
