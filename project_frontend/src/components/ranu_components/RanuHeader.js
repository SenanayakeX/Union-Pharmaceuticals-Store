import React from "react";

const style1 = {
  color:"white",
  align:"center",
  backgroundColor:"#212329",
}

function Header(){

    return(

      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid" style={style1}>
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">


        <li className="nav-item">
          <a className="nav-link active" style={{color:"white"}} href="/add">Add Expired Drug</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" style={{color:"white"}} href="/view">Expired Drug List</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
</div>

    )
}

export default Header;