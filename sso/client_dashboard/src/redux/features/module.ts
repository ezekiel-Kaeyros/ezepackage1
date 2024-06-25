// import { BulkMessageTabType } from "@/app/common/components/bulk-messages/bulk-message-tabs/bulk-message-tab/bulkMessageTab";
import { createSlice } from "@reduxjs/toolkit";
import { ModuleTypes } from "./ModuleTypes";

const initialState: ModuleTypes = {
  moduleId: "",
};

export const moduleReducer = createSlice({
  name: "moduleReducers",
  initialState,
  reducers: {
    setModuleId: (state, action) => {
      state.moduleId = action.payload;
    },
  },
});

export const { setModuleId } = moduleReducer.actions;
export default moduleReducer.reducer;
