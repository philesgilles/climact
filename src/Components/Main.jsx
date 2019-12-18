import React from 'react'
import Levers from './Levers/Levers'
import Display from './Display/Display'
import './Main.css'

const Main = () => {
    return (
        <main className="main">
            <Levers />
            <Display />
        </main>
    )
}

export default Main