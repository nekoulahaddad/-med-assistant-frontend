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

export const addReport = createAsyncThunk(
  "main/addReport",
  async (file: any) => {
    var formData = new FormData();
    formData.append("file", file);
    try {
      const response = await api.post(endpoints.addProtocol, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (err) {
      return err;
    }
  }
);

type IMainState = {
  isLoading: boolean;
  reports: TReport[];
  filters: any;
  isError: boolean;
};

export const initialState: IMainState = {
  isLoading: false,
  reports: [],
  filters: null,
  isError: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    changeLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    clearError: (state) => {
      state.isError = false;
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
        state.reports = action.payload.data;
      }
    );
    builder.addCase(getAllReports.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(addReport.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      addReport.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.filters = action.payload;
      }
    );
    builder.addCase(addReport.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { changeLoading, clearError } = mainSlice.actions;

export default mainSlice.reducer;
