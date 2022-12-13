import axios from "axios";

const instanceContacts = axios.create({
    baseURL: "https://6391517b65ff4183112ad2e0.mockapi.io/api/",
    // params: {
    //     _limit: 25,
    // }
});

export const getContactsA = async () => {
    const response = await instanceContacts.get('/contacts');
    return response.data;
}

export const addContactA = async (data) => {
    const response = await instanceContacts.post('/contacts', data);
    return response.data;
}

export const removeContactA = async (id) => {
    const response = await instanceContacts.delete(`/contacts/${id}`);
    return response.data;
}