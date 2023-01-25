import headercss from './header.module.scss'
export default function Header() {
    return (
    <>
      <div className={headercss.header}>
      <div className={headercss.logo}>
        <img className={headercss.logoimg} src="/images/logo.png"/>

      </div>
      <div className={headercss.navbar}>
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
      <div className={headercss.hamburger}><i className="fa fa-bars"></i></div>
      </div>
</>
  )}