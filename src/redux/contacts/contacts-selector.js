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
    const filteredContacts = contacts.items.filter(({ name, phone }) => {
      const normalizeName = name.toLowerCase();
      const result = normalizeName.includes(normalizeFilter) || phone.includes(normalizeFilter);
      console.log(result);
      return result;
    })
  console.log(filteredContacts);
    return filteredContacts;
  }
 