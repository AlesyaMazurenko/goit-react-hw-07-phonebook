import axios from 'axios';

import { createAsyncThunk } from "@reduxjs/toolkit";
// import * as api from "../../shared/api/contacts";
// import actions from './contacts-action';

axios.defaults.baseURL = 'https://6391517b65ff4183112ad2e0.mockapi.io/api';

// const isDublicate = ({ name, number }, contacts) => {
//     const normalizedName = name.toLowerCase();

//     const result = contacts.find(item => {
//         return (normalizedName === item.name.toLowerCase());
//     });
//     return Boolean(result);
// }

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkApi) => {
    try {
        const response = await axios.get('/contacts')
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
        }
    },
    //3й параметр проверки до віполнения запроса = чтобі остановить віполнениe фции fetch
    // {
    //     condition: (data, { getState }) => {
    //         const { books } = getState();
    //         if (isDublicate(data, books.items)) {
    //             return alert('This contact already exists');
    //         }
    //     }
    // }
)

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (data, thunkApi) => {
    try {
        const response = await axios.post('/contacts', data);
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkApi) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})





// export const fetchContacts = () => {
//     const func = async (dispatch) => {
//         dispatch(actions.fetchContactLoading());
//         try {
//             const data = await api.getContactsA();
//             dispatch(actions.fetchContactSuccess(data));
//         } catch (error) {
//             const { message, response } = error;
//             const errorData = {
//                 message,
//                 ststus: response.status,
//             }
//             dispatch(actions.addContactError(error));
//         }
//     }
//     return func;
// }

// export const addContact = (data) => {
//     const func = async (dispatch, getState) => {
//         const { contacts } = getState();
//         if (isDublicate(data, contacts.items)) {
//             return alert("This contact already exists");
//         }
//         try {
//             dispatch(actions.addContactLoading());
//             const result = await api.addContactA(data);
//             dispatch(actions.addContactSuccess(result));
//         } catch (error) {
//             dispatch(actions.addContactError(error)); 
//         }
//     }
// }