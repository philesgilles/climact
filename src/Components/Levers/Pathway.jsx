import React from 'react'
import {PATHWAYS} from '../../utils/constants'
import './Pathway.css'

const Pathway = () => {
    return (
        <div className="pathway">
            <h2 className="pathway__header">Pathway</h2>
            <div className="pathway__body">
                <select>
                    <option value="" default selected>Choose an example pathway</option>
                    {PATHWAYS.map((pathway, i) => <option value={String(i)} key={i}>{pathway}</option>)}
                </select>
            </div>
        </div>
    )
}

export default Pathway