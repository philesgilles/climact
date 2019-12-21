const initialState = {
  stateLevers: []
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  let newLevers = [...state.stateLevers];
  switch (type) {
    case "SET_ALL_LEVERS":
      return {
        stateLevers: payload
      };
    case "SET_THIS_LEVERS":
      newLevers[payload.id] = {
        ...newLevers[payload.id],
        value: payload.value
      };
      return { stateLevers: newLevers };
    case "SET_GROUP_LEVERS":
      newLevers = newLevers.map(e => {
        if (e[payload.group] === payload.title) {
          e.value = payload.value;
        }
        return e;
      });

      return state;

    default:
      return state;
  }
};

export default reducer;
