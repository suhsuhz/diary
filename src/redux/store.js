import { configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import localStorage from "redux-persist/es/storage";
import rootReducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";

const persistConfig = {
    key: 'root',
    storage: localStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        const defaultMiddleware = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        });
        return [...defaultMiddleware, sagaMiddleware]
    }
});

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export default store;