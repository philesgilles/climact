import React, {useState} from 'react'
import './LeversBtn.css'

const LeversBtn = ({initialValue}) => {
    const [leversValue, setLeversValue] = useState(initialValue)
    const handleClick = () => {
        if (initialValue === 0) setLeversValue(0)
        else setLeversValue(leversValue => (leversValue < initialValue-0.8) ? initialValue : (leversValue-0.1).toFixed(1))
    }

    return (
        <span 
            className={"levers__btn"}
            onClick={handleClick}
        >
            {leversValue}
        </span>
    )

}

export default LeversBtn