import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endpoints } from "../../api/endpoints";
import { api } from "../../api/config";
import { TReport } from "../../types/main";

export const getAllReports = createAsyncThunk(
  "main/getAllReports",
  async () => {
    try {
      const response = await api.get(endpoints.getAllReports, {});
      return response;
    } catch (err) {
      return err;
    }
  }
);

type IMainState = {
  isLoading: boolean;
  reports: TReport[];
};

export const initialState: IMainState = {
  isLoading: false,
  reports: [],
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    changeLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllReports.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getAllReports.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.reports = action.payload;
      }
    );
    builder.addCase(getAllReports.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { changeLoading } = mainSlice.actions;

export default mainSlice.reducer;
