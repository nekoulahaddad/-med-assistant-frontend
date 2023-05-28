import { PayloadAction, createAsyncThunk, createSlice, AsyncThunkAction } from "@reduxjs/toolkit";
import { endpoints } from "../../api/endpoints";
import { api } from "../../api/config";
import { TReport } from "../../types/main";

export const getAllReports = createAsyncThunk(
  "main/getAllReports",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(endpoints.getAllReports, {});
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
        },
      });
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getReport = createAsyncThunk(
  "main/getReport",
  async (arg: any) => {
    const { doctor, fileId } = arg
    console.log(doctor, fileId)
    try {
      const response = await api.post(endpoints.getReport, `
        "fileId": "faf0ce4219ae66874e6842cb7b92889c",
        "filters": {
          "doctor": [
            "врач-кардиолог"
          ],
          "code: [
            "J30.2",
            "H65.9",
            "I25.1"
          ]
        }
      `, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      });
      return response;
    } catch (error) {
      return error
    }
  }
)

type IMainState = {
  isLoading: boolean;
  reports: TReport[];
  filters: any;
  isError: boolean;
  errorMessage: string;
};

export const initialState: IMainState = {
  isLoading: false,
  reports: [],
  filters: null,
  isError: false,
  errorMessage: "",
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
  },
});

export const { changeLoading, clearError } = mainSlice.actions;

export default mainSlice.reducer;
