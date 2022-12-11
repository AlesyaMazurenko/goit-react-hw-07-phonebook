import axios from "axios";

const instanceContacts = axios.create({
    baseURL: "https://6391517b65ff4183112ad2e0.mockapi.io/api/contacts",
    params: {
        _limit: 25,
    }
});

export const getContactsA = async () => {
    const { data } = await instanceContacts.get("/");
    return data;
}

export const addContactA = async (data) => {
    const { data: result } = await instanceContacts.post("/", data);
    return result;
}

export const removeContactA = async (id) => {
    const { data } = await instanceContacts.delete(`/${id}`);
    return data;
}