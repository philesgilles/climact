import React from 'react';
import { connect } from 'react-redux';
import * as QueryString from "query-string";


const Test = props => {
    // Get parameters from URL
    const params = QueryString.parse(props.location.search);
    // If there are params, check for codes
    if (Object.keys(params).length > 0){
        const urlLevers = params.levers.split("");
        const getOptions = params.options;
    }
    
    return (
        <div>
            <p>{props.leversState}</p>
            <p onClick={() => props.setLeversState([1,2,3])}>Click Me</p>
        </div>    
    )
}

const mapsStateToProps =state => {
    return {
        leversState:state.leversState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setLeversState : (value) => dispatch({type: "SET_LEVERS", payload: value})
    }
}

export default connect(mapsStateToProps, mapDispatchToProps)(Test);