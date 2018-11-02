import React, { Component } from "react";
import { css } from "emotion";

import Header from "./Components/Header";
import Ribbon from "./Components/Ribbon";
import Sidebar from "./Components/Sidebar";
import Wizard from "./Components/Wizard";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Ribbon />
        <div className={css({ backgroundColor: "#f7f9fa" })}>
          <div className="container pt-2 pb-2">
            <div className="row">
              <Sidebar />
              <Wizard />
              <Navigation />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
