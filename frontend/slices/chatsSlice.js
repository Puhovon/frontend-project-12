import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchData = createAsyncThunk(
    'chatsSlice/fetchData',
    async (authHeader, { rejectWithValue }) => {
        try {
            axios.get('/api/v1/channels', { Authorization: `Bearer ${authHeader}`, }).then((r) => console.log(r.data));
        } catch (error) {
            rejectWithValue({ message: err.message, status: err.status });
        }

    }
)

const slice = createSlice({
    name: 'chatsSlice',
    initialState: { loading: false, channels: [], currentChanelId: null },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, { payload }) => {
            state.loading = true;
            state.channels = payload;
            state.currentChanelId = payload.currentChanelId;
        }).addCase(fetchData.pending, (state) => {
            state.loading = true;
        }).addCase(fetchData.rejected, (state) => {
            state.loading = false;
        })
    }
})

const actions = {...slice.actions, fetchData};
export {actions};
export default slice.reducer;