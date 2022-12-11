const { createAction } = require("@reduxjs/toolkit");

const fetchContactLoading = createAction("contacts/fetch/loading");
const fetchContactSuccess = createAction("contacts/fetch/success");
const fetchContactError = createAction("contacts/fetch/error");

const addContactLoading = createAction("contacts/add/loading");
const addContactSuccess = createAction("contacts/add/success");
const addContactError = createAction("contacts/add/error");

const removeContactLoading = createAction("contacts/remove/loading");
const removeContactSuccess = createAction("contacts/remove/success");
const removeContactError = createAction("contacts/remove/error");

const actions = {
    fetchContactLoading,
    fetchContactSuccess,
    fetchContactError,
    addContactLoading,
    addContactSuccess,
    addContactError,
    removeContactLoading,
    removeContactSuccess,
    removeContactError
}

export default actions;