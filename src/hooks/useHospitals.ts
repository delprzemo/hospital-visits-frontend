import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import {
  Hospital,
  hospitalsFetched,
  hospitalsFetchingFinished,
  hospitalsFetchingStarted,
} from '../store/hospital.store'
import { httpGet } from '../api'

const useHospitals = () => {
  const hospitals = useSelector((state: RootState) => state.hospitals.list)
  const isLoading = useSelector(
    (state: RootState) => state.hospitals.isHospitalFetchInProgress,
  )
  const dispatch = useDispatch<AppDispatch>()

  const fetchData = useCallback(async () => {
    dispatch(hospitalsFetchingStarted())
    const result = await httpGet<Hospital[]>('hospital')

    if (result?.status === 200 && result.result) {
      dispatch(hospitalsFetched(result.result))
    }

    dispatch(hospitalsFetchingFinished())
  }, [dispatch])

  const getHospitals = fetchData

  return { hospitals, getHospitals, isLoading }
}

export default useHospitals
