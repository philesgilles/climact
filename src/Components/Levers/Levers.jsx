import React from 'react'
import Pathway from './Pathway'
import LeversSelector from './LeversSelector'
import Loading from '../Loading/Loading'
import './Levers.css'

const Levers = props => {
   console.log(props)
   let levers = <Loading/>
   if (props.levers.length > 0) {
      levers = props.levers.map((lever, i) => <LeversSelector key={i} title={lever.title}/>)
   }
   return (
      <div className="levers">
         <Pathway />
         <hr/>
         {levers}
      </div>

   );
}
 
export default Levers




