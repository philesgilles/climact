const initialState = {
  leversValue: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LEVERS":
      return {
        leversValue: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
