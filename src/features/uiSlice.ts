import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  darkMode: boolean;
  showBalance: boolean;
}

const initialState: InitialState = {
  darkMode: true,
  showBalance: true,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", state.darkMode.toString());
    },
    toggleShowBalance: (state) => {
      state.showBalance = !state.showBalance;
      localStorage.setItem("showBalance", state.showBalance.toString());
    },
    loadLS: (state) => {
      const options = ["showBalance", "darkMode"] as const;
      for (const option of options) {
        const local = localStorage.getItem(option);
        if (local) {
          state[option] = local === "true";
        }
      }
    },
  },
});

export default uiSlice.reducer;

export const { toggleDarkMode, toggleShowBalance, loadLS } = uiSlice.actions;
