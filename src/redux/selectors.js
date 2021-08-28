import { createSelector } from "reselect";

export const getContacts = (state) => {
  return state.contactsSlice.entities;
};
export const getFilter = (state) => state.filterSlice;

export const filteredSelector = createSelector(
  [getContacts, getFilter],
  (contacts, filterValue) =>
    contacts.filter((contact) => {
      return contact.name.toLocaleLowerCase().includes(filterValue);
    })
);
