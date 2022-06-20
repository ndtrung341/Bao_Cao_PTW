import { authApi } from 'api/authApi';
import { removeItemStorage, setItemStorage } from 'utils';
import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { cartActions } from './cartSlice';

const initialState = {
   isLogging: false,
   currentUser: null,
};

export const getMe = createAsyncThunk('auth/getMe', async () => {
   const user = await authApi.getMe();
   if (user.is_verified) {
      setItemStorage('user', user);
   }
   return user;
});

export const register = createAsyncThunk('auth/register', async (payload) => {
   const res = await authApi.register(payload);
   setItemStorage('access_token', res.access_token);
});

export const login = createAsyncThunk('auth/login', async (payload) => {
   const res = await authApi.login(payload);
   setItemStorage('access_token', res.access_token);
});

export const logout = createAsyncThunk('auth/logout', async (_, { dispatch }) => {
   await authApi.logout();
   removeItemStorage('access_token');
   removeItemStorage('user');
   dispatch(cartActions.emptyCart());
});

export const verifyEmail = createAsyncThunk('auth/verify', async (payload, { dispatch }) => {
   await authApi.verify(payload);
   dispatch(getMe());
});

export const refreshToken = createAsyncThunk(
   'auth/refreshToken',
   async (_, { rejectWithValue }) => {
      try {
         const res = await authApi.refreshToken();
         // console.log(res);
         setItemStorage('access_token', res.access_token);
         return res.access_token;
      } catch (error) {
         console.log(error);
         // rejectWithValue(error);
      }
   }
);

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},

   extraReducers(builder) {
      builder.addCase(getMe.fulfilled, (state, action) => {
         const user = action.payload;
         if (user.is_verified) {
            state.currentUser = user;
         }
      });

      builder.addCase(logout.fulfilled, () => {
         return initialState;
      });

      builder.addMatcher(isAnyOf(register.pending, login.pending), (state) => {
         state.isLogging = true;
      });

      builder.addMatcher(
         isAnyOf(register.rejected, login.rejected, register.fulfilled, login.fulfilled),
         (state) => {
            state.isLogging = false;
         }
      );
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
export const selectIsLoggedIn = createSelector(selectCurrentUser, (user) => Boolean(user));
