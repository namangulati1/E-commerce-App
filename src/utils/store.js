import{configureStore} from "@reduxjs/toolkit";
import products from "../reducers/index";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const store = configureStore({
        reducer: {
            app:products,
        },
    preloadedState: persistedState,
});

store.subscribe(() => {
    const state = state.getState();
    saveState(state.app.cart);
})


export default store;