import React from 'react'
import cls from './styled/HelpHeader.module.scss'
import { Link } from 'react-router-dom'
import { IoIosMenu, IoIosSearch, IoIosClose } from 'react-icons/io'

export default function HelpHeader() {
  const [menuActive, setMenuActive] = React.useState(false)

  const handleActive = () => {
    setMenuActive(prev => !prev)
  }

  return (
    <div className={cls.helpHeader}>
      <div className={cls.icons}>
        <IoIosSearch className={cls.icon} />
        {menuActive === false ? 
        <IoIosMenu onClick={handleActive} className={cls.icon} /> : 
        <IoIosClose onClick={handleActive} className={cls.icon} />}
      </div>
      <nav className={`${cls.nav} ${menuActive && cls.navActive}`}>
        <Link className={cls.navTitle} to={''}>Menu</Link>
        <Link className={cls.navTitle} to={''}>Explore</Link>
        <Link className={cls.navTitle} to={''}>Pages</Link>
        <Link className={cls.navTitle} to={''}>Ranking</Link>
        <Link className={cls.navTitle} to={''}>Contact</Link>
      </nav>
    </div> 
  )
} 
