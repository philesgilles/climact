import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as queryString from 'query-string'


const Main = props => {

   // const urlValueTest = '10101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010'

   const apiCall = async () => {
      const response = await fetch('http://54.93.129.246:5000/api/v1.0/levers', { method: 'GET' })
      const fetchedLevers = await response.json()

      let urlData = queryString.parse(props.location.search)
      if (Object.keys(urlData).length > 0) {
         urlData = urlData.levers.match(/[0-9]{1,2}/g)     

         fetchedLevers.forEach((e, i) => {
            e.value = urlData[i]
         });
      }
      else {
         fetchedLevers.forEach(e => {
            e.value = '00'
         });
      }
      console.table(fetchedLevers)

      props.setAllLevers(fetchedLevers)
   }

   useEffect(() => {
      apiCall()
   }
   ,[])

   return (
   <div>
      { props.levers.map((lever, i) => <p key={i}>{lever.value}</p>) }
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