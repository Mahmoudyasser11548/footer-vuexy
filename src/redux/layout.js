// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

// ** ThemeConfig Import
import themeConfig from "../configs/themeConfig.js";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    footerType: themeConfig.layout.footer.type,
  },
  reducers: {
    handleFooterType: (state, action) => {
      state.footerType = action.payload;
    },
  },
});

export const {
  handleFooterType,
} = layoutSlice.actions;

export default layoutSlice.reducer;
