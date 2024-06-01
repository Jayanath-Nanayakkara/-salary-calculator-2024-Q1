import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  payDetails: [],
  deductions: [],
  totalEarnings: 0,
  grossDeductions: 0,
  employeeETF: 0,
  grossEarnings: 0,
};

const salarySlice = createSlice({
  name: "salary",
  initialState,
  reducers: {
    setSalary: (state, action) => {
      state.value = action.payload;
    },
    setPayDetails: (state, action) => {
      state.payDetails = action.payload;
      state.totalEarnings = action.payload.reduce(
        (total, item) => total + parseFloat(item.amount || 0),
        0
      );
    },
    setDeductions: (state, action) => {
      state.deductions = action.payload;
      state.grossDeductions = action.payload.reduce(
        (total, item) => total + parseFloat(item.amount || 0),
        0
      );
    },
    setGrossEarnings: (state, action) => {
      // Corrected naming
      state.grossEarnings = action.payload;
    },
    setReset: (state) => {
      state.value = "";
      state.payDetails = [];
      state.deductions = [];
      state.totalEarnings = 0;
      state.grossDeductions = 0;
      state.employeeETF = 0;
      state.grossEarnings = 0; // Corrected naming
    },
  },
});

export const {
  setSalary,
  setPayDetails,
  setReset,
  setDeductions,
  setGrossEarnings,
} = salarySlice.actions;
export default salarySlice.reducer;
