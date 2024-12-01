import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import DonorPage from "./components/DonorPage";
import RecipientPage from "./components/RecipientPage";
import BloodInventoryPage from "./components/BloodInventoryPage";
import Navbar from "./components/Navbar";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/donate" component={DonorPage} />
        <Route path="/recipient" component={RecipientPage} />
        <Route path="/inventory" component={BloodInventoryPage} />
      </Switch>
    </Router>
  );
}

export default App;
