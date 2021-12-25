import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "./index";

// Define a type for the slice state
interface UserState {
  user: {
    id: number;
    name: string;
    email: string;
  };
}

// Define the initial state using that type
const initialState: UserState = {
  user: {
    id: 0,
    name: "",
    email: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = initialState.user;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {},
  },
});

export const { login, logout, incrementByAmount } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
