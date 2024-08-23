const INITIAL_STATE = {
  name: "",
};

export const filtersSlice = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "filters/value":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export const changeFilter = (value) => {
  return {
    type: "filters/value",
    payload: value,
  };
};
