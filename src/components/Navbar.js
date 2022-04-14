import React from 'react'
//import { Link } from "react-router-dom";
import PropTypes from 'prop-types'



export default function Navbar(props) {

  // const changeThemeColor=(colorTheme)=>{
  //   console.log(colorTheme);
  //   document.body.style.backgroundColor = colorTheme;
    
  //   if(colorTheme){
  //     if(colorTheme==='theme-red')
  //     {
  //         const colorId = 'red'
  //         setColorTheme(colorId);
  //         document.body.style.backgroundColor = colorTheme;
  //     }
  //  }
  //localStorage.setItem('theme-color',colorTheme)

  


  return (
    //for darkmode
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    {/* for theme color */}
   {/* < nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */}
      <div className="container-fluid" style={{ backgroundColor: props.colorTheme }}>
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutTitle}</Link>
            </li>

          </ul> */}
          {/* <form className="d-flex"> 
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary" type="submit">Search</button>
         </form> */}
          {/* <div className='App theme-orange'>
            
            <div className='theme-options'>

              <div id="theme-white"

                onClickCapture={changeThemeColor('theme-white')}>
              </div>
              <div id="theme-blue"

                onClickCapture={changeThemeColor('theme-blue')}>
              </div>
              <div id="theme-orange"

                onChange={changeThemeColor('theme-orange')}>
              </div>
              <div id="theme-purple"

                onChange={changeThemeColor('theme-purple')}>
              </div>
              <div id="theme-green"

                onChange={changeThemeColor('theme-green')}>
              </div>
              <div id="theme-red"

                onChange={changeThemeColor('theme-red')}>
              </div>
            </div>

          </div> */}

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>

            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnLbl}</label>
          </div>

        </div>
      </div>
    </nav>

  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTitle: PropTypes.string.isRequired

};
Navbar.defaultProps = {
  title: 'Set Title',
  aboutTitle: 'About'

};
