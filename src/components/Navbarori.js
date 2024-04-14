import React from 'react'
import "../css/navbarori.css"
import img1 from "../images/netflix.png"
const Navbarori = () => {
  return (
    <div>
        <div className='navbar'>
            <div className='main-nav'>
                <img src={img1}/>

                <span className='main'>
                <span>Home</span>
                    <span>TV shows</span>
                    <span>Movies</span>
                    <span>New & Popular</span>
                    <span>My List</span>
                    <span>Browse by Languages</span>   
                </span>    


                               {/*  */}

            <span className='dropdown'>
                    <span className="dropdown-toggle" data-toggle="dropdown">Dropdown</span>
                    <div className="dropdown-menu">
                    <center>
                        <li>Home</li>
                        <li>TV shows</li>
                        <li>Movies</li>
                        <li>New & Popular</li>
                        <li>My List</li>
                        <li>Browse by Languages</li>
                </center>
                    </div>
            </span>
          </div>   
            
           
               
            <div className='side-nav'>
                <span className='search'><i class="fa-solid fa-magnifying-glass"></i></span>
                <span className='child'>children</span>
                <span><i class="fa-regular fa-bell"></i></span>
                <span><i class="fa-regular fa-square"></i></span>
            </div>                
        </div>
    </div>
  )
}

export default Navbarori