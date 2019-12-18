import React from 'react'
import LeversBtn from './LeversBtn'
import './LeversSelector.css'

const LeversSelector = ({title, type='levers__simple'}) => {
    return (
        <div className="levers__item">
            <div className={type}>{title}</div>
            <div className="levers__groupBtn">
                <LeversBtn initialValue={0} />
                <LeversBtn initialValue={1} />
                <LeversBtn initialValue={2} />
                <LeversBtn initialValue={3} />
            </div>
        </div>
    )
}

export default LeversSelector