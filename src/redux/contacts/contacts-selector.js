import { getFilter } from "redux/filter/filter-selectors";

export const getContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const getFilteredContacts = state => {

    const contacts = getContacts(state);
    const filter = getFilter(state);

  if (!filter) {
    console.log(contacts);
      return contacts.items;
    }

    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.items.filter(({ name, number }) => {
      const normalizeName = name.toLowerCase();
      const result = normalizeName.includes(normalizeFilter) || number.includes(normalizeFilter);
      return result;
    })
    return filteredContacts;
  }
 