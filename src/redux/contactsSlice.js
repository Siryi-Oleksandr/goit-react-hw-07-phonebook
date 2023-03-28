import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Об'єкт редюсерів
  // reducers: {
  //   addContact(state, action) {
  //     state.push(action.payload);
  //   },
  //   deleteContact(state, action) {
  //     return state.filter(contact => contact.id !== action.payload);
  //   },
  //   editContact(state, action) {
  //     const index = state.findIndex(
  //       contact => contact.id === action.payload.id
  //     );
  //     state.splice(index, 1, action.payload);
  //   },
  // },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [editContact.pending](state) {
      state.isLoading = true;
    },
    [editContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [editContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
// export const { addContact, deleteContact, editContact } = contactsSlice.actions;
