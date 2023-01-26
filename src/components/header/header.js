
import headercss from './header.module.scss'
import { motion } from 'framer-motion';
import { headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";

export default function Header() {
  const headerShadow = useHeaderShadow();
  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={headercss.header}>
        <div className={headercss.logo}>
          <img className={headercss.logoimg} src="/images/logo.png" />

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
    </motion.div>
  )
}