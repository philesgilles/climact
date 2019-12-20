import React from "react"
import Select from "react-select"
import {PATHWAYS} from "../../../utils/constants"

import "./Pathway.css"

const Pathway = () => {
    const pathways = PATHWAYS.map(pathway => ({
        value: pathway,
        label: pathway,
    }))

    return (
        <div className="pathway">
            <h2 className="pathway__header">Pathway:</h2>
            <div className="pathway__body">
                <Select 
                    options={pathways} 
                    defaultValue={{value: '', label: 'Choose an example pathway'}} 
                    className='pathway__inputs'
                />
            </div>
        </div>
    )
}

export default Pathway