import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type userInfoType = {
  token: string;
  id: string;
  name: string;
  email: string;
  role: string;
  profileImg: string;
  phoneNo: string;
};

export type userDataType = {
  currentUser: userInfoType | null;
};

export interface userState {
  user: userDataType;
}

const initialState: userState = {
  user: { currentUser: null },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userInfoType>) => {
      state.user.currentUser = action.payload;
    },
    // signout:(state)=>{
    //     state.user.currentUser = localStorage.clear()
    // }
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
