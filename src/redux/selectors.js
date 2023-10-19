import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.phoneBook.contacts;
export const selectFilter = state => state.phoneBook.filter;

export const selectIsLoading = state => state.user.isLoading;
export const selectError = state => state.user.error;
export const selectUserData = state => state.user.userData;
export const selectToken = state => state.user.token;
export const selectIsSignedIn = state => state.user.isSignedIn;

export const selectFilterContacts = createSelector(
  selectContacts,
  selectFilter,
  (contacts, filter) => {
    const filteredContactsByName = contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
        contact.number.includes(filter)
      );
    });
    return filteredContactsByName;
  }
);
