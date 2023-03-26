import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = JSON.parse(localStorage.getItem('contacts') ?? []);

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.unshift(action.payload)
            }
        },
        deleteContact: {
            reducer(state, action) {
                return state.filter(contact => contact.id !== action.payload);
            }
        }
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;