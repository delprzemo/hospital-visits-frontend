import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Hospital = { id: string; name: string }

export interface HospitalState {
  list: Hospital[]
  isHospitalFetchInProgress: boolean
}

const initialState: HospitalState = {
  list: [],
  isHospitalFetchInProgress: false,
}

export const hospitalState = createSlice({
  name: 'hospital',
  initialState: initialState,
  reducers: {
    hospitalsFetched: (state, action: PayloadAction<Hospital[]>) => {
      state.list = action.payload
      state.isHospitalFetchInProgress = false
    },
    hospitalsFetchingStarted: (state) => {
      state.isHospitalFetchInProgress = true
    },
    hospitalsFetchingFinished: (state) => {
      state.isHospitalFetchInProgress = false
    },
  },
})

export const {
  hospitalsFetched,
  hospitalsFetchingStarted,
  hospitalsFetchingFinished,
} = hospitalState.actions

export default hospitalState.reducer
