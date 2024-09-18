import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type userInfoType = {
  id: string;
  name: string;
  email: string;
  role: string;
  profileImg: string;
  phoneNo: string;
};

export interface userState {
  token: string | null;
  user: userInfoType | null;
}

const initialState: userState = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userInfoType>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    // signout:(state)=>{
    //     state.user.currentUser = localStorage.clear()
    // }
  },
});

export const { setUser, setToken } = userSlice.actions;

export default userSlice.reducer;
