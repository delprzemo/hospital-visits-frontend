import Modal from '../../components/Modal/Modal'
import { Visit } from './types'

export type VisitDetailsModalProps = {
  isOpen: boolean
  onClose: () => void
  selectedVisit?: Visit
}

const VisitDetailsModal: React.FC<VisitDetailsModalProps> = ({
  isOpen,
  onClose,
  selectedVisit,
}) => {
  return (
    <Modal
      content={
        <div className="container">
          <div className="row">
            <div className="col">
              <p>
                <strong>Date:</strong>{' '}
                <span className="text-muted">
                  {selectedVisit?.dateOfVisit.toString()}
                </span>
              </p>
              <p>
                <strong>Doctor:</strong>{' '}
                <span className="text-muted">{selectedVisit?.doctor.name}</span>
              </p>
              <p>
                <strong>Specialization:</strong>{' '}
                <span className="text-muted">
                  {selectedVisit?.specialization}
                </span>
              </p>
              <p>
                <strong>Patient:</strong>{' '}
                <span className="text-muted">
                  {selectedVisit?.patient.name}
                </span>
              </p>
            </div>
          </div>
        </div>
      }
      title="Visit Details"
      isOpen={isOpen}
      onClose={onClose}
    ></Modal>
  )
}

export default VisitDetailsModal
