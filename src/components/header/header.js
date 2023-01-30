
import headercss from './header.module.scss'
import { useState } from 'react';


export default function Header() {
  const [sideMenu, setsideMenu] = useState(false);
  return (
    
      <div className={headercss.header}>
        <div className={headercss.logo}>
          <img className={headercss.logoimg} src="/images/logo.png" />

        </div>
        <div className={`${headercss.navbar} ${sideMenu ? `${headercss.showMenu}` : ""}`}>
          <ul>
            <li>Home</li>
            <li>Tours</li>
            <li>Gallery</li>
            <li>Contact</li>
            <li>About Us</li>
            <li>Account</li>
          </ul>
          <input type="button" className={headercss.btncall} value="Call +91-9906678789" />
        </div>
        <div className={headercss.hamburger} ><i className="fa fa-bars" onClick={(()=>setsideMenu(prev => !prev))}></i></div>
        
      </div>
   
  )
}