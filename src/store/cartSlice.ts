import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CartItem {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    qty: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                state.items.push({...action.payload, qty: 1});
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        increaseQty: (state, action: PayloadAction<string>) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.qty += 1;
            }
        },
        decreaseQty: (state, action: PayloadAction<string>) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                if (item.qty > 1) {
                    item.qty -= 1;
                } else {
                    state.items = state.items.filter(
                        (item) => item.id !== action.payload
                    );
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;