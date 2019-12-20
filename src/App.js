import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./Components/Header/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer/Footer"

import "./App.css"

const App = () => {
    return (
        <>
            <Header />
            <Router>
                <Route exact path='/' component={Main} />
            </Router>
            <Footer />
        </>
    )
}

export default App