import React from "react"
import Pathway from "./Pathway/Pathway"
import LeversItems from "./LeversList/LeversList"

import "./Levers.css"

const Levers = () => {
    return (
        <div className="levers">
            <Pathway />
            <hr />
            <LeversItems />
        </div>
    )
}

export default Levers