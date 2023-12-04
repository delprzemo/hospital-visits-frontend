import { Link } from 'react-router-dom'
import './PageWithNavigation.scss'
import { FaArrowLeft } from 'react-icons/fa'

export type PageWithNavigationProps = {
  isLoading?: boolean
  children?: React.ReactNode
  header?: string
  backUrl?: string
}

const PageWithNavigation: React.FC<PageWithNavigationProps> = ({
  isLoading,
  children,
  header,
  backUrl,
}) => {
  return (
    <div className="page-with-header">
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className=" navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {backUrl && (
                    <Link to={backUrl} className="back-btn">
                      <FaArrowLeft></FaArrowLeft>
                    </Link>
                  )}
                  <h5>{header}</h5>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="content">
        {isLoading ? (
          <div className="loading">
            <img
              src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1263.gif"
              alt="Loading..."
            />
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  )
}

export default PageWithNavigation
