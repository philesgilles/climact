import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

const App = () => {
    return (
        <div className="app">
            <Header />
            <Router>
                <Route exact path='/' component={Main} />
            </Router>
            <Footer />
        </div>
    )
}

export default App