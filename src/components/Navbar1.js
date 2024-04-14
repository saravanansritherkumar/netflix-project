import React from 'react'
import img1 from "../images/netflix.png"
import "../css/navbar1.css"

const Navbar = () => 
{
  return (

    <div className='navbar'>

<a href=''><img src={img1} height={"35px"} width={"95px"}/></a>

     
        <ul className='main-navi'>
                <li>Home</li>
                <li>TV shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
        </ul>


        <ul className='browse'>
          <div class="dropdown">
          <li class="dropdown-toggle" data-toggle="dropdown">Browse
          <span class="caret"></span></li>
          <ul class="dropdown-menu">
               <center>
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



        <ul className='side-navi'> 
          <li><i class="fa-solid fa-magnifying-glass"></i></li>
          <li id='child'>Children</li>
          <li><i class="fa-regular fa-bell"></i></li>
          <li><i class="fa-regular fa-square"></i></li>
        </ul>
                

        
     
      
    </div>
   
  )
}

export default Navbar