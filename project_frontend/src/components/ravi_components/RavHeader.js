import React from "react";

function Header(){

    return(

      
      
     
      <div style={{backgroundColor:"#99d3f5"}}>
      
    <center><a href="index.html"><img src="asserts/logo.jpg" style={{height:"150px",width:"200px"}} class="logo" /></a></center>
      <center><h2>Union Pharmaceuticals</h2></center>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color:"blue"}}>Nav</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/add">Create Feedback/Inquiry</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/view">View Feedback/Inquiry</a>
          </li>
          
          
        </ul>
      </div>
    </div>
  </nav>
        </div>
    )
}  
export default Header;  