
import headercss from './header.module.scss'
import { useState, useEffect } from 'react';
import Link from 'next/link';


export default function Header() {
  const [sideMenu, setsideMenu] = useState(false);
  useEffect(()=> {
    // add overflow hidden for body tag
    if(sideMenu)
    document.body.style.overflow="hidden";
    else
    document.body.style.overflow="auto";
    document.body.style.overflowX="hidden";
}, [sideMenu])
  return (
    
      <div className={headercss.header}>
        <div className={headercss.logo}>
          <img className={headercss.logoimg} src="/images/logo.png" />

        </div>
        <div className={`${headercss.navbar} ${sideMenu ? `${headercss.showMenu}` : ""}`}>
          <ul>
          <Link href="/"><li>Home</li></Link>
            <Link href="/packages/packages"><li>Packages</li></Link>
            <li>Gallery</li>
            <li>Contact</li>
            <li>About Us</li>
            <li>Account</li>
          </ul>
          <input type="button" className={headercss.btncall} value="Call +91-9906678789" />
        </div>
        <div className={headercss.hamburger} ><i className="fa fa-bars" onClick={(()=>setsideMenu(prev => !prev))}></i></div>
        <div className={`${headercss.overlay} ${sideMenu ? `${headercss.showOverlay}` : ""}`}></div>
      </div>
   
  )
}