import { configureStore } from "@reduxjs/toolkit";

//reducers
import { contactsReducer } from './contacts/contacts-slice';
import filterReducer from "./filter/filter-slice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    }
});
// const contactsPersistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['filter']
// }

// const reducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer
// });

// const persistedContactReducer = persistReducer(contactsPersistConfig, reducer)

// export const store = configureStore({
//     reducer: persistedContactReducer, 
//     middleware: getDefaultMiddleware => 
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// });

// export const persistor = persistStore(store);    



