import React, { Component } from "react";
import { connect } from "react-redux";

class Navigation extends Component {
  renderNavItems() {
    return this.props.nav.map(nav => {
      let navClass = "list-group-item";
      if (nav.step === this.props.step) navClass += " active";
      return (
        <li key={nav.step} className={navClass}>
          {nav.label}
        </li>
      );
    });
  }

  render() {
    return (
      <nav className="col-md-3 pb-2 pt-2">
        <div>
          <h4>Required Information</h4>
          <ul className="list-group">{this.renderNavItems()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    nav: state.nav.nav,
    step: state.nav.step
  };
}

export default connect(mapStateToProps)(Navigation);
