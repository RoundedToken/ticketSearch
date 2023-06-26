import filterSlice from './filterSlice';
import { filmsApi } from '@/services/fetchFilms';
import cartSlice from './cartSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cinemasApi } from '@/services/fetchCinemas';

const rootReducer = combineReducers({
    [filmsApi.reducerPath]: filmsApi.reducer,
    [cinemasApi.reducerPath]: cinemasApi.reducer,
    cartSlice,
    filterSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(filmsApi.middleware, cinemasApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
