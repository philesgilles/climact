import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const Main = props => {

   useEffect(async () => {
      const response = await fetch('http://54.93.129.246:5000/api/v1.0/levers', { method: 'GET' })
      const fetchedLevers = await response.json()
      fetchedLevers.forEach(e => {
         e.value = '00'
      });
      console.table(fetchedLevers)

      props.setAllLevers(fetchedLevers)
   },[])

   return (
   <div>
      {props.levers.map((lever, i) => <p key={i}>{lever.value}</p>)}
   </div>
   )
}

const mapStateToProps = state => {
   return {
      levers: state.levers
   }
}

const mapDispatchToProps = dispatch => {
   return {
      setAllLevers: value => dispatch({type: 'SET_ALL_LEVERS', payload: value})
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)