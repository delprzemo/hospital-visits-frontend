import { useEffect } from 'react'
import Card from '../../components/Card/Card'
import PageWithNavigation from '../../components/PageWithNavigation/PageWithNavigation'
import useHospitals from '../../hooks/useHospitals'
import { useNavigate } from 'react-router-dom'
import './Hospitals.scss'

const Hospitals: React.FC = () => {
  const { hospitals, getHospitals, isLoading } = useHospitals()
  const navigate = useNavigate()

  useEffect(() => {
    getHospitals()
  }, [getHospitals])

  return (
    <PageWithNavigation isLoading={isLoading} header="Choose hospital">
      <div className="container text-center hospital-list">
        <div className="row">
          {hospitals.map((hospital) => (
            <div className="col" key={hospital.id}>
              <Card
                title={hospital.name}
                description={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet posuere metus at convallis. Nam tincidunt turpis dui, sed posuere sapien congue eget.'
                }
                onClick={() => navigate(`/visits/${hospital.id}`)}
              ></Card>
            </div>
          ))}
        </div>
      </div>
    </PageWithNavigation>
  )
}

export default Hospitals
