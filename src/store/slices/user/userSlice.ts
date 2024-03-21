import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
  type IUser,
  type IUserAddress,
  type IUserCredentials,
  type IUserLocation,
} from '../../../models/IUser';
import { type IError, type ILocationError } from '../../../models/IError';

const initialState: IUser = {
  email: '',
  password: '',
  loginTime: '',
  location: {
    latitude: null,
    longitude: null,
    error: null,
  },
  address: {
    country: '',
    countryCode: '',
    fullAddress: '',
    error: null,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserCredentials: (
      state: IUser,
      action: PayloadAction<IUserCredentials>,
    ) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    saveUserLocation: (state: IUser, action: PayloadAction<IUserLocation>) => {
      state.location = action.payload;
    },
    saveLocationError: (
      state: IUser,
      action: PayloadAction<ILocationError>,
    ) => {
      state.location.error = action.payload;
    },
    saveLoginTime: (state: IUser, action: PayloadAction<string>) => {
      state.loginTime = action.payload;
    },
    saveUserAddress: (state: IUser, action: PayloadAction<IUserAddress>) => {
      state.address = action.payload;
    },
    saveAddressError: (state: IUser, action: PayloadAction<IError>) => {
      state.address.error = action.payload;
    },
    removeUser: () => initialState,
  },
});

export const {
  saveUserCredentials,
  saveUserLocation,
  saveLoginTime,
  saveLocationError,
  saveUserAddress,
  saveAddressError,
  removeUser,
} = userSlice.actions;

export default userSlice.reducer;
