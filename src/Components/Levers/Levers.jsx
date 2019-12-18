import React from 'react'
import Pathway from './Pathway'
import LeversItems from './LeversItems'
import './Levers.css'

const Levers = () => {
    return (
        <div className="levers">
            <Pathway />
            <LeversItems />
        </div>
    )
}

export default Levers