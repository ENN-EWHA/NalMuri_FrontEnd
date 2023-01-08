import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import colorSlice from "./colorSlice";

export default configureStore({
    reducer: {
        auth: authSlice,
        color: colorSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
