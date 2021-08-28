import * as api from "../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    try {
      const contactsFromDb = await api.fetchContacts();
      return contactsFromDb;
    } catch (error) {
      return error;
    }
  }
);

export const postContacts = createAsyncThunk(
  "contacts/postContacts",
  async (newContact) => {
    try {
      const contactsFromDb = await api.postContacts(newContact);
      return contactsFromDb;
    } catch (error) {
      return error;
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (id) => {
    try {
      await api.deleteContacts(id);
      return id;
    } catch (error) {
      return error;
    }
  }
);
