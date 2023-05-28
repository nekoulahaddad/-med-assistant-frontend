import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endpoints } from "../../api/endpoints";
import { api } from "../../api/config";
import { TReport } from "../../types/main";

const getToken = () => `Bearer ${localStorage.getItem("token")}`;

export const getAllReports = createAsyncThunk(
  "main/getAllReports",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(endpoints.report, {
        headers: {
          "Content-Type": "application/json",
          Authorization: getToken(),
        },
      });
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const startAnalysis = createAsyncThunk(
  "main/startAnalysis",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await api.post(endpoints.report, data, {
        headers: {
          Authorization: getToken(),
        },
      });
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const addReport = createAsyncThunk(
  "main/addReport",
  async (file: any, { rejectWithValue }) => {
    var formData = new FormData();
    formData.append("file", file);
    try {
      const response = await api.post(endpoints.addProtocol, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: getToken(),
        },
      });
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

type IMainState = {
  isLoading: boolean;
  reports: TReport[];
  filters: any;
  isError: boolean;
  errorMessage: string;
  finalReport: any;
  isLoggedIn: boolean;
};

export const initialState: IMainState = {
  isLoading: false,
  reports: [],
  filters: null,
  isError: false,
  errorMessage: "",
  finalReport: [],
  isLoggedIn: false,
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
    handleError: (state, action) => {
      state.isError = true;
      state.errorMessage = action.payload;
    },
    handleLoginIn: (state, action) => {
      state.isLoggedIn = action.payload;
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
    builder.addCase(
      getAllReports.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload?.message || "";
      }
    );
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
    builder.addCase(addReport.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload?.message || "";
    });

    builder.addCase(startAnalysis.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      startAnalysis.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.finalReport = action.payload.data;
      }
    );
    builder.addCase(
      startAnalysis.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload?.message || "";
        state.finalReport = [];
      }
    );
  },
});

export const { changeLoading, clearError, handleError, handleLoginIn } =
  mainSlice.actions;

export default mainSlice.reducer;
