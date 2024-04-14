import React from 'react'
import img1 from "../images/netflix.png"
import "../css/navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>

      <a href=''><img src={img1}/></a>

      <div>
        <ul id='main-navi'>
                <li>Home</li>
                <li>TV shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
        </ul>
        


        <ul id='browse'>
          
        </ul>

      
      </div>
     
    </div>
  )
}

export default Navbar