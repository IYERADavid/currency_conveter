import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">Tooltips</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav w-100 d-flex justify-content-evenly">
                  <Link to="/" className="nav-link active">currency-converter</Link>
                  <Link to="/weather" className="nav-link">weather</Link>
                </div>
              </div>
            </div>
            </nav>
        </>
    )
}

export default Header
