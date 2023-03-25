const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts') ?? []),
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    }

    case 'contacts/deleteContact': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }

    case 'filter/setFilter': {
      return {
        ...state,
        filter: action.payload,
      };
    }

    default:
      return state;
  }
};
