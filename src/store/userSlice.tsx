import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "./index";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

// Define a type for the slice state
interface UserState {
  user: {
    uid: string | null;
    email: string | null;
  };
  status: "idle" | "loading" | "failed";
}

const initialState: UserState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : {
        uid: null,
        email: null,
      },
  status: "idle",
};

export const loginWithEmailAndPassword = createAsyncThunk(
  "user/loginWithEmailAndPassword",
  async ({ email, password }: { email: string; password: string }) =>
    // { dispatch }: { dispatch: AppDispatch }
    {
      let myEmail: string | null = null;
      let myUid: string | null = null;

      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem(
            "user",
            JSON.stringify({
              email: user.email,
              uid: user.uid,
            })
          );
          myEmail = user.email;
          myUid = user.uid;
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });

      return {
        email: myEmail,
        uid: myUid,
      };
    }
);

export const createUserWithEmail = createAsyncThunk(
  "user/createUserWithEmail",
  async (
    arg: {
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    let myEmail: string | null = null;
    let myUid: string | null = null;

    await createUserWithEmailAndPassword(auth, arg.email, arg.password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: user.email,
            uid: user.uid,
          })
        );
        myEmail = user.email;
        myUid = user.uid;
      })
      .catch((error) => {
        alert(error.message);
      });
    return {
      email: myEmail,
      uid: myUid,
    };
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = initialState.user;
    },
    /*   createUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {}, */
  },
  extraReducers: (builder) => {
    builder.addCase(createUserWithEmail.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(createUserWithEmail.fulfilled, (state, action) => {
      state.status = "idle";
      state.user.email = action.payload.email;
      state.user.uid = action.payload.uid;
    });
    builder.addCase(createUserWithEmail.rejected, (state, action) => {
      state.status = "failed";
    });
    builder.addCase(loginWithEmailAndPassword.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(loginWithEmailAndPassword.fulfilled, (state, action) => {
      state.status = "idle";
      state.user.email = action.payload.email;
      state.user.uid = action.payload.uid;
      console.log("loginWithEmailAndPassword.fulfilled", state.user.email);
    });
    builder.addCase(loginWithEmailAndPassword.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export const { login, logout } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
