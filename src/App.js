import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Components/Main";
import Header from "./Components/Header/Header"

const App = () => {
  return (
    <>
    <Header/>
    <Router>
      <Route path="/" component={Main} />
    </Router>
    </>
  );
};

export default App;
