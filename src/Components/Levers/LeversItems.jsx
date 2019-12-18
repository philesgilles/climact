import React from 'react'
import LeversSelector from './LeversSelector'
import './LeversItems.css'

const LeversItems = () => {
    return (
        <div className="levers__items">
            <LeversSelector title={"Passenger distance"} />
            <LeversSelector title={"Use of paper and plastic packaging"} />
        </div>
    )
}

export default LeversItems