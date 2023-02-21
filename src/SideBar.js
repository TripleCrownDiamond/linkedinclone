import { Avatar } from '@mui/material';
import React from 'react';
import './SideBar.css';

function SideBar() {

  const recentItem = (topic) => (

    <div className='sideBar__recentItem'>
        <span className='sideBar__hash'>#{topic}</span>
        <p></p>
    </div>


  )

  return (
    <div className='sideBar'>
        <div className='sideBar__top' >

            <img 
            src="https://res.cloudinary.com/lucioletechnology/image/upload/v1676994632/cover_y2eo6j.jpg" 
            alt="cover" 
            />

            <Avatar className='sideBar__avatar' />

            <h2>Georgeo Agbahungba</h2>
            <h4 className = 'sideBar__email' >gagbahungba2019@gmail.com</h4>

        </div>
        <div className='sideBar__stats' >
            <div className='sideBar__stat' >
              <p>Who viewed you</p>
              <p className='sideBar__statNumber'>500</p>
            </div>
            <div className='sideBar__stat' >
              <p>Views on post</p>
              <p className='sideBar__statNumber'>650</p>
            </div>
        </div>
        <div className='sideBar__bottom' >
          <p>Recent</p>

          { recentItem("reactjs") }
          { recentItem("programming") }
          { recentItem("softwareengeneering") }
          { recentItem("design") }
          { recentItem("developer") }

        </div>
    </div>
  )
}

export default SideBar;