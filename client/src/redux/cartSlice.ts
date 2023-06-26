import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICartState {
    tickets: Record<string, number>;
    idList: string[];
}

const initialState: ICartState = {
    tickets: {},
    idList: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        decrementCount(state, { payload }: PayloadAction<string>) {
            const count = state.tickets[payload];

            if (count === 1) {
                delete state.tickets[payload];
                state.idList = Object.keys(state.tickets);
            } else state.tickets[payload] = count - 1;
        },
        incrementCount(state, { payload }: PayloadAction<string>) {
            const count = state.tickets[payload];

            if (!count) {
                state.tickets[payload] = 1;
                state.idList = Object.keys(state.tickets);
            } else state.tickets[payload] = count + 1;
        },
        removeFromCart(state, { payload }: PayloadAction<string>) {
            delete state.tickets[payload];
            state.idList = Object.keys(state.tickets);
        },
    },
});

export const { decrementCount, incrementCount, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
