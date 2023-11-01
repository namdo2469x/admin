import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import userService from "../services/user";

const initialState: any = {
  userList: [],
  userInfo: {},
  token: "",
};

export const registerUser = createAsyncThunk("users/register", async (data: any, { rejectWithValue }) => {
  try {
    const res = await userService.registerUser(data);
    return res.data;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }

    return rejectWithValue(err.response.data);
  }
});

export const getUserByID = createAsyncThunk("users/id", async (data: any, { rejectWithValue }) => {
  try {
    const res = await userService.getUser(data);
    return res.data;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }

    return rejectWithValue(err.response.data);
  }
});

export const updateUser = createAsyncThunk("users/updateuser", async (data: any, { rejectWithValue }) => {
  try {
    const res = await userService.updateUser(data);
    return res.data;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }

    return rejectWithValue(err.response.data);
  }
});

// export const getUser = createAsyncThunk("user/getUser", async () => {
//   const res = await userService.getUser();
//   return res.data;
// });

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    token: (state, { payload }) => {
      state.token = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state: any, { payload }) => {
      return payload;
    });
    builder.addCase(registerUser.rejected, (state: any, action: any) => {
      return action.payload;
    });
    builder.addCase(updateUser.fulfilled, (state: any, { payload }) => {
      state.userInfo = payload;
    });
    builder.addCase(updateUser.rejected, (state: any, action: any) => {
      return action.payload;
    });
    // builder.addCase(getUser.fulfilled, (state: any, { payload }: any) => {
    //   state.userInfo = payload;
    // });
  },
});
export const { token } = userSlice.actions;
const { reducer } = userSlice;
export default reducer;
