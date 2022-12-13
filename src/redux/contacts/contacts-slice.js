import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contacts-operations";

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
// ];

const initialState = {
    items: [],
    loading: false,
    error: null,
}
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
          state.isLoading = false;
          state.error = null;
          state.items.push(action.payload);
        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
          state.isLoading = false;
          state.error = null;
          state.items = state.items.filter(
            contact => contact.id !== action.payload.id
          );
        },
    },


    // extraReducers: {
    //     [fetchContacts.pending]: (store) => {
    //         store.loading = true;
    //     },
    //     [fetchContacts.fulfilled]: (store, { payload }) => {
    //         store.loading = false;
    //         store.items = payload;
    //         store.error = null;
    //     },
    //     [fetchContacts.rejected]: (store, { payload }) => {
    //         store.loading = false;
    //         store.error = payload;
    //     },

    //     [addContact.pending]: (store) => {
    //         store.loading = true;
    //     },
    //     [addContact.fulfilled]: (store, { payload }) => {
    //         store.loading = false;
    //         store.items.push(payload);
    //         store.error = null;
    //     },
    //     [addContact.rejected]: (store, { payload }) => {
    //         store.loading = false;
    //         store.error = payload;
    //     },

    //     [deleteContact.pending]: (store) => {
    //         store.loading = true;
    //     },
    //     [deleteContact.fulfilled]: (store, { payload }) => {
    //         store.loading = false;
    //         store.items = store.items.filter(item => item.id !== payload);
    //         store.error = null;
    //     },
    //     [deleteContact.rejected]: (store, { payload }) => {
    //         store.loading = false;
    //         store.error = payload;
    //     },


    // }
}
);
export const contactsReducer = contactsSlice.reducer;

    // reducers: {
    //     addContact: {
    //         reducer: (store, { payload }) => {
    //             store.push(payload);
    //         },
    //         prepare: (data) => {
    //             return {
    //                 payload: {
    //                     ...data,
    //                     id: nanoid()
    //                 }
    //             }
    //         }
    //     },
    //     removeContact: (store, { payload }) =>
    //         store.filter(({ id }) => id !== payload)
    // }
// }


// export const { addContact, removeContact } = contactsSlice.actions;
// export default contactsSlice.reducer;