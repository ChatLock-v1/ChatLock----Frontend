import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        // Add your slice reducers here
        auth:authSlice

    },
});

export default store;