import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-hot-toast'
const initialState = {
    coinData: localStorage.getItem('coinData') || []
}


export const getCoinData = createAsyncThunk("/show", async () => {
    console.log('djdfhjf hefh')
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    console.log(response.data)
    toast.promise(response, {
        loading: "wail",
        success: "Suucess",
        error: "Failed"
    })
    console.log(response.data)
    return (await response).data
})


const coinData = createSlice({
    name: 'coinData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCoinData.fulfilled, async (state, action) => {
                // console.log(action.payload)
                (localStorage.getItem('coinData'), action.payload)
                state.coinData = [...action.payload]
            })
    }
})


export default coinData.reducer;