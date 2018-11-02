import React, { Component } from "react";
import { connect } from "react-redux";
import { getNextPage, getPreviousPage } from "../Actions/NavActions";

import StatementOfIdentity from "./Wizard/StatementOfIdentity";
import ProfessionalInformation from "./Wizard/ProfessionalInformation";
import LenderInformation from "./Wizard/LenderInformation";

class WizardForm extends Component {
  nextPage = () => {
    this.props.dispatch(getNextPage());
  };

  previousPage = () => {
    this.props.dispatch(getPreviousPage());
  };

  handleSubmit = () => {
    window.alert("submitted");
  };

  render() {
    const { step } = this.props;
    return (
      <main
        className="col-md-7 mt-2 mb-2 p-2"
        style={{ backgroundColor: "#fff" }}
      >
        {step === 0 && <StatementOfIdentity onSubmit={this.nextPage} />}
        {step === 1 && (
          <ProfessionalInformation
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {step === 2 && (
          <LenderInformation
            previousPage={this.previousPage}
            onSubmit={this.handleSubmit}
          />
        )}
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    step: state.nav.step
  };
}

export default connect(mapStateToProps)(WizardForm);
