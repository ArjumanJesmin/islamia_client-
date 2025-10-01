import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SchoolState {
  // Local UI state that doesn't need API
  selectedFeature: string | null;
  statsModalOpen: boolean;
  activeSection: string;
}

const initialState: SchoolState = {
  selectedFeature: null,
  statsModalOpen: false,
  activeSection: 'home',
};

const schoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {
    setSelectedFeature: (state, action: PayloadAction<string | null>) => {
      state.selectedFeature = action.payload;
    },
    setStatsModalOpen: (state, action: PayloadAction<boolean>) => {
      state.statsModalOpen = action.payload;
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
  },
});

export const { setSelectedFeature, setStatsModalOpen, setActiveSection } = schoolSlice.actions;
export default schoolSlice.reducer;