import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [{ id: 1, name: "Natasha Stan", number: "123 - 12 - 12" }],
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContacts: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContacts: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContacts, deleteContacts } = slice.actions;
