import './Card.scss'

export type CardProps = {
  image?: string
  title: string
  description: string
  onClick: () => void
}

const Card: React.FC<CardProps> = ({ image, title, description, onClick }) => {
  return (
    <div className="card">
      <img
        src={
          image ??
          'https://img.lovepik.com/free-png/20211102/lovepik-hospital-png-image_400195471_wh1200.png'
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary" onClick={onClick}>
          Select
        </button>
      </div>
    </div>
  )
}

export default Card
