import { TGenre } from '@/models/TGenre';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IFilterState {
    byName: string;
    byGenre: { value: TGenre | ''; title: TGenre | '' };
    byCinema: { value: string; title: string };
}

const initialState: IFilterState = {
    byName: '',
    byGenre: { value: '', title: '' },
    byCinema: { value: '', title: '' },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterByName(state, { payload }: PayloadAction<string>) {
            state.byName = payload;
        },
        setFilterByGenre(
            state,
            { payload }: PayloadAction<{ value: TGenre | ''; title: TGenre | '' }>
        ) {
            state.byGenre = payload;
        },
        setFilterByCinema(state, { payload }: PayloadAction<{ value: string; title: string }>) {
            state.byCinema = payload;
        },
    },
});

export const { setFilterByCinema, setFilterByGenre, setFilterByName } = filterSlice.actions;

export default filterSlice.reducer;
