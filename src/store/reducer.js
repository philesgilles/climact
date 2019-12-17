const initialState = {
   levers: []
}

const reducer = (state = initialState, action) => {
   switch(action.type){
      case 'SET_ALL_LEVERS':
         return {
            levers: action.payload
         }
      default : 
         return state
   }
}

export default reducer