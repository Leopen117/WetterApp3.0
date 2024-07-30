import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link"

function Navbar() {
    return(    
        <nav className="navbar navbar-expand-lg " style={{backgroundColor: "#E6E6E6", height: "150px"}} >
        <div className="container-fluid">
          <a className="navbar-brand mb-0 ms-3 h1">Weather by Cloudya</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active h2" aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-5 h2" href="/detailView">DetailView</Link>
              </li>
            </ul>
          </div>
      </nav>
      ) 
}

export default Navbar