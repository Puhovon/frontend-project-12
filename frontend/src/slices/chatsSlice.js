import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchData = createAsyncThunk(
    'chatsSlice/fetchData',
    async (authHeader, { rejectWithValue }) => {
        try {
            console.log(authHeader);
            const data = await axios.get('/api/v1/channels', {headers:{ Authorization: `Bearer ${authHeader}`, }}).then((r) => {
                console.log(r.data)
            });
            return data;

        } catch (err) {
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
            console.log(payload)
        }).addCase(fetchData.pending, (state) => {
            state.loading = true;
        }).addCase(fetchData.rejected, (state) => {
            state.loading = false;
        })
    }
})

const actions = { ...slice.actions, fetchData };
export { actions };
export default slice.reducer;