import { authApi } from 'api/authApi';
import { getItemStorage, removeItemStorage, setItemStorage } from 'utils';
import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
   isLogging: false,
   isLoggedIn: false,
   currentUser: getItemStorage('user'),
};

export const getMe = createAsyncThunk('auth/getMe', async () => {
   const user = await authApi.getMe();
   setItemStorage('user', user);
   return user;
});

export const register = createAsyncThunk('auth/register', async (payload) => {
   const token = await authApi.register(payload);
   setItemStorage('access_token', token);
});

export const login = createAsyncThunk('auth/login', async (payload) => {
   const token = await authApi.login(payload);
   setItemStorage('access_token', token);
});

export const logout = createAsyncThunk('auth/logout', async () => {
   await authApi.logout();
   removeItemStorage('access_token');
   removeItemStorage('user');
});

export const refreshToken = createAsyncThunk('auth/refreshToken', async () => {
   const token = await authApi.refreshToken();
   setItemStorage('access_token', token);
   return token['access_token'];
});

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},

   extraReducers(builder) {
      builder.addCase(getMe.fulfilled, (state, action) => {
         state.currentUser = action.payload;
      });

      builder.addCase(logout.fulfilled, (state) => {
         return { ...initialState, currentUser: null };
      });

      builder.addMatcher(isAnyOf(register.pending, login.pending), (state) => {
         state.isLoggedIn = false;
         state.isLogging = true;
      });

      builder.addMatcher(isAnyOf(register.fulfilled, login.fulfilled), (state) => {
         state.isLoggedIn = true;
         state.isLogging = false;
      });
   },
});

// reducer
const authReducer = authSlice.reducer;
export default authReducer;

// actions
export const authActions = authSlice.actions;

// selectors
export const selectCurrentUser = (state) => state.auth.currentUser;
export const selectIsLogging = (state) => state.auth.isLogging;
export const selectIsLoggedIn = createSelector(selectCurrentUser, (user) =>
   Boolean(user)
);
