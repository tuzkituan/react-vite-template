import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../config/store';
import { getMeService, loginService } from '../services/user';
import { setToken } from '../utils/token';

interface UserState {
  loading: 'idle' | 'pending' | 'success' | 'error';
  userData: any;
  error: any;
}

export const getMeAsync = createAsyncThunk(
  'user/getMe',
  async (token: string) => {
    const response = await getMeService({ token });
    return response.data;
  },
);

export const loginAsync = createAsyncThunk(
  'user/login',
  async ({ email, password }: { email: string; password: string }) => {
    const response = await loginService({ email, password });
    return response.data;
  },
);

const initialState: UserState = {
  loading: 'idle',
  userData: null,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMeAsync.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(getMeAsync.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = 'success';
        state.userData = action.payload;
      })
      .addCase(getMeAsync.rejected, (state, action: PayloadAction<any>) => {
        state.loading = 'error';
        // state.error = action.error;
      })
      .addCase(loginAsync.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = 'success';
        state.userData = action.payload;
        setToken(action.payload.token);
      });
  },
});

export const selectCurrentUser = (state: RootState) => state.user.userData;

export default userSlice.reducer;
