import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  email: string;
  password: string;
}

interface IUserState {
  userData: IUser;
}

const initialState: IUserState = {
  userData: {
    email: '',
    password: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state: IUserState, action: PayloadAction<IUser>) => {
      state.userData = action.payload;
    },
    removeUser: (state: IUserState) => {
      state.userData = { email: '', password: '' };
    },
  },
});

export const { saveUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
