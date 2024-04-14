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
          <div class="dropdown">
          <li class="dropdown-toggle" data-toggle="dropdown">Browse
          <span class="caret"></span></li>
          <ul class="dropdown-menu">
            {/* <hr color='white'/> */}
               <center>
               {/* <span><i class="fa-solid fa-caret-down"></i></span> */}
                <li>Home</li>
                <li>TV shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
                </center>
          </ul>
         </div>
        </ul>

      
      </div>
     
    </div>
  )
}

export default Navbar