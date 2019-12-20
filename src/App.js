import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Components/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Route path="/" component={Main} />
      </Router>
      <Footer />
    </>
  );
};

export default App;
