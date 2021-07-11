import React from 'react'

import logo from '../../../static/imgs/tmdb.svg'

function Footer() {
  return (
    <div>
      <hr />
      <div>
      <p> 
        Amazing Movies Database <br />
        <span> This product uses the TMDb API but is not endorsed or certified by TMDb. </span>
      </p>

      <img src={logo} alt="The Movie Database Logo" style={{width: "8em"}} /> 
      </div>

    </div>
  )
}

export default Footer