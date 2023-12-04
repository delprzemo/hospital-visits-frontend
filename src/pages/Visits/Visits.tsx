import { useParams } from 'react-router-dom'
import PageWithNavigation from '../../components/PageWithNavigation/PageWithNavigation'
import { useCallback, useEffect, useState } from 'react'
import { Visit } from './types'
import { httpPost } from '../../api'
import useHospitals from '../../hooks/useHospitals'
import './Visits.scss'
import SearchBar from '../../components/SearchBar/SearchBar'
import VisitDetailsModal from './VisitDetailsModal'

const Visits: React.FC = () => {
  const { hospitalId } = useParams<{ hospitalId: string }>()
  const [visits, setVisits] = useState<Visit[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { hospitals } = useHospitals()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedVisit, setSelectedVisit] = useState<Visit>()

  const searchForVisits = useCallback(
    async (searchText: string) => {
      setIsLoading(true)
      const visitFetchResult = await httpPost<Visit[]>(
        `hospital/${hospitalId}/visits`,
        {
          searchText: searchText,
        },
      )

      if (visitFetchResult.result && visitFetchResult.status < 300) {
        setVisits(visitFetchResult.result)
      } else {
        setVisits([])
      }

      setIsLoading(false)
    },
    [hospitalId],
  )

  useEffect(() => {
    if (!isLoading && !visits?.length) {
      searchForVisits('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchForVisits])

  const onVisitSelected = (visit: Visit) => {
    setSelectedVisit(visit)
    setIsModalOpen(true)
  }

  return (
    <PageWithNavigation
      header={`Hospital visits for ${
        hospitals.find((x) => x.id === hospitalId)?.name
      }`}
      backUrl="/hospital-list"
    >
      <div className="visits">
        <SearchBar
          id="visits-search-bar"
          placeHolder="Start typing name of patient, doctor or specialization..."
          onSearch={(searchText: string) => searchForVisits(searchText)}
        ></SearchBar>
        <div className="table-responsive">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Doctor</th>
                <th scope="col">Specialization</th>
                <th scope="col">Patient</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center' }}>
                    <img
                      src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1263.gif"
                      alt="Loading..."
                      className="loading-animation"
                    />
                  </td>
                </tr>
              ) : visits.length > 0 ? (
                visits.map((visit: Visit, index: number) => (
                  <tr key={visit.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{new Date(visit.dateOfVisit).toLocaleString()}</td>
                    <td>{visit.doctor.name}</td>
                    <td>{visit.specialization}</td>
                    <td>{visit.patient.name}</td>
                    <td>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => onVisitSelected(visit)}
                        disabled={false}
                      >
                        See details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center' }}>
                    No visits found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <VisitDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedVisit={selectedVisit}
      ></VisitDetailsModal>
    </PageWithNavigation>
  )
}

export default Visits
