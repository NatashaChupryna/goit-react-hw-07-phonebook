import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

// const initialState = [{ id: 1, name: 'Bradd Pitt', number: 232 - 34 - 56 }];

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialState,
//   reducers: {
//     addContact(state, action) {
//       return [...state, action.payload];
//     },
//     deleteContact(state, action) {
//       const index = state.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       state.splice(index, 1);
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {return { ...state, isLoading: true };
    },
    [fetchContacts.fulfilled](state, action) {
      return {
        ...state,
        items: [...action.payload],
        isLoading: false,
        error: null,};
      },
    [fetchContacts.rejected](state, action) {return { ...state, isLoading: false, error: action.payload };
    },

    [addContact.pending](state) {return { ...state, isLoading: true };
    },
    [addContact.fulfilled](state, action) {return {
        ...state,
        items: [...state.items, action.payload],
        isLoading: false,
        error: null,};
    },
    [addContact.rejected](state, action) {return { ...state, isLoading: false, error: action.payload };
    },
    [deleteContact.pending](state) {return { ...state, isLoading: true };
    },
    [deleteContact.fulfilled](state, action) {
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload.id),
        isLoading: false,
        error: null,};
    },
    [deleteContact.rejected](state, action) {return { ...state, isLoading: false, error: action.payload };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
