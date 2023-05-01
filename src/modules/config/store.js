import { configureStore } from "@reduxjs/toolkit";
import favorito from "../favorites/state/slices/favoritos";

export default configureStore({
    reducer: {
        favorito,
    },
});