import "bootstrap/dist/css/bootstrap.min.css"

function HeadNavbar(){
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
            <a className="nav-link active h2" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link me-5 h2" href="#">Prediction</a>
          </li>
        </ul>
      </div>
  </nav>
  ) 
}

export default HeadNavbar;