import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

const initialState = {
    data: JSON.parse(localStorage.getItem('data')) || {}
}


export const getCoinData = createAsyncThunk("/show", async () => {
    console.log('djdfhjf hefh')
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    console.log(response.data)
    toast.promise(response, {
        loading: "Wait",
        success: "Suuce",
        error: "Failed"
    })
    return response.data
})


const coinData = createSlice({
    name: 'coinData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCoinData.fulfilled, (state, action) => {
                console.log(action)
                localStorage.setItem('data', action.payload)
            })
            .addCase(getCoinData.rejected, (state, action) => {
                toast.error("Failed to load data")
            })
    }
})


export default coinData.reducer;