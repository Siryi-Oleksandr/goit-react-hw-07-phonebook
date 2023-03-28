import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter;
export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filterValue) => {
    const normalizedFilter = filterValue.toLocaleLowerCase().trim();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  }
);
