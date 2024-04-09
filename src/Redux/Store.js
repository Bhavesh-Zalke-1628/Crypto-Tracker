import { configureStore } from '@reduxjs/toolkit'
import CoinSlice from './Slice/CoinSlice.js'
const store = configureStore({
    reducer: {
        coinData: CoinSlice
    },
    devTools: true
});

export default store