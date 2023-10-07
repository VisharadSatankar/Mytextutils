import React from 'react'

// impt for importing prop datatypes
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//rfc for calling for function based calling  
//props using props we can set it as a variable
//Always use a curly bracket
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.abouttext}</Link>
          </li>
          
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.togglestyle} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}
//for setting the data types of title and abouttext as string 
Navbar.proptotype = {
    // isrequired to set that some value has to be initialsed without you ll get an
    title : PropTypes.string.isRequired,
    abouttext : PropTypes.string.isRequired
}
//setting the default value of variables
Navbar.defaultProps = {
    title : "Set title here",
    abouttext : "Enter About text here"
}
