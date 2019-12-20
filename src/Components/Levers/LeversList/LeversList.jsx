import React from "react"
import LeversSelector from "../LeversSelector/LeversSelector"

import "./LeversList.css"

const LeversItems = () => {
    return (
        <div className="levers__list">
            <LeversSelector title={'Key behaviours'} />
            <LeversSelector title={'Transport'} />
            <LeversSelector title={'Agriculture, forestry and land use (AFOLU)'} />
        </div>
    )
}

export default LeversItems