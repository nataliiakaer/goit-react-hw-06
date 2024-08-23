const INITIAL_STATE = {
  items: [],
};

export const contactsSlice = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "contacts/add": {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case "contacts/delete": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export const addContact = (payload) => {
  return {
    type: "contacts/add",
    payload,
  };
};

export const deleteContact = (constactId) => {
  return {
    type: "contacts/delete",
    payload: constactId,
  };
};
