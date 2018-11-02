import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "emotion";

class Ribbon extends Component {
  renderText = () => {
    const { step, nav } = this.props;
    return nav[step].label;
  };

  render() {
    return (
      <div
        className={css({
          backgroundColor: "#282964",
          color: "#fff",
          padding: ".75rem 0"
        })}
      >
        <div className="container">
          <h1 className={css({ fontWeight: "normal" })}>{this.renderText()}</h1>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    nav: state.nav.nav,
    step: state.nav.step
  };
}

export default connect(mapStateToProps)(Ribbon);
