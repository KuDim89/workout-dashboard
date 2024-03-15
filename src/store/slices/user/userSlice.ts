import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  email: string;
  password: string;
}

interface IUserState {
  userData: IUser | null;
}

const initialState: IUserState = {
  userData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state: IUserState, action: PayloadAction<IUser>) => {
      state.userData = action.payload;
    },
  },
});

export const { saveUser } = userSlice.actions;
export default userSlice.reducer;
