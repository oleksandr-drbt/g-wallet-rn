import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CapitalSource } from "@/types/capital";
import { RootState } from "./index";

export interface CapitalState {
  sources: CapitalSource[];
}

const initialState: CapitalState = {
  sources: [],
};

const capitalSlice = createSlice({
  name: 'capital',
  initialState,
  reducers: {
    setSources(state, action: PayloadAction<CapitalSource[]>) {
      state.sources = action.payload;
    },
    addSource(state, action: PayloadAction<Omit<CapitalSource, 'id'>>) {
      const lastSource = state.sources[state.sources.length - 1];
      const source = { id: lastSource.id + 1, ...action.payload };
      state.sources = [...state.sources, source];
    },
    editSource(state, action: PayloadAction<CapitalSource>) {
      state.sources = state.sources.map((source) => {
        return source.id === action.payload.id ? action.payload : source;
      });
    },
    removeSource(state, action: PayloadAction<number>) {
      state.sources = state.sources.filter(({ id }) => id !== action.payload);
    },
  },
});

export const {
  setSources,
  addSource,
  editSource,
  removeSource,
} = capitalSlice.actions;

export const selectSources = (state: RootState) => state.capital.sources;

export default capitalSlice.reducer;
