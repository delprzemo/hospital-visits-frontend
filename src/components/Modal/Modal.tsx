import './Modal.scss'

export type ModalProps = {
  content: React.ReactNode
  title: string
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ content, title, isOpen, onClose }) => {
  if (!isOpen) {
    return <></>
  }

  return (
    <div
      className={`modal fade show`}
      id="exampleModal"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      style={{ display: 'block' }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{content}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
