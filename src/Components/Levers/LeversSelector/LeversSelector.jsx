import React, {useState} from "react"
import LeversBtn from "../LeversBtn/LeversBtn"

import "./LeversSelector.css"

const LeversSelector = ({title, type='levers__simple'}) => {
    const [leversSelected, setLeversSelected] = useState(null)
    const handleLeversSelected = (initialValue) => setLeversSelected(initialValue)

    return (
        <div className="levers__item">
            <div className={type}>{title}</div>
            <div className="levers__groupBtn">
                <LeversBtn 
                    initialValue={0} 
                    isActive={leversSelected === 0}
                    handleLeversSelected={handleLeversSelected}
                />
                <LeversBtn 
                    initialValue={1} 
                    isActive={leversSelected === 1}
                    handleLeversSelected={handleLeversSelected}
                />
                <LeversBtn 
                    initialValue={2} 
                    isActive={leversSelected === 2}
                    handleLeversSelected={handleLeversSelected}
                />
                <LeversBtn 
                    initialValue={3} 
                    isActive={leversSelected === 3}
                    handleLeversSelected={handleLeversSelected}
                />
            </div>
        </div>
    )
}

export default LeversSelector