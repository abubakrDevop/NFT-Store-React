import React from 'react'
import cls from './styled/Header.module.scss'
import { explore, pages } from './index'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/outline'
import {IoMdNotifications, IoMdSearch } from 'react-icons/io'

export default function Header() {
  const [exploreActive, setExploreActive] = React.useState(false)
  const [pagesAcive, setPagesAcive] = React.useState(false)

  function handleExplore() {
    setExploreActive(prev => !prev)
  }
  function handlePages() {
    setPagesAcive(prev => !prev)
  }

  return (
    <>

      <header className={cls.header}>
        <img className={cls.logo} src="./images/headLogo.svg" alt="logo" />
        <Link to={''} className={cls.button}>Buy now</Link>
      </header>

      <header className={cls.lowerHeader}>
        <img className={cls.lowerLogo} src="./images/lowerLogo.svg" alt="logo" />
        <section className={cls.lowerMenuBox}>
              <Link className={cls.menuLinks} to={''}> Home </Link>
              <Link 
                onMouseEnter={handleExplore} 
                className={cls.menuLinks} to={''}>
                Explore
                <ChevronDownIcon className={`${cls.icon} ${exploreActive && cls.activeIcon}`} />
              </Link>
              <Link 
                onMouseEnter={handlePages} 
                className={cls.menuLinks} to={''}>
                Pages
                <ChevronDownIcon className={`${cls.icon} ${pagesAcive && cls.activeIcon}`} />
              </Link>
              <Link className={cls.menuLinks} to={''}> Ranking </Link>
              <Link className={cls.menuLinks} to={'/contact'}> Contact </Link>
          <section className={cls.iconBox}>
            <IoMdSearch className={cls.icon}></IoMdSearch>
            <IoMdNotifications className={cls.icon}></IoMdNotifications>
          </section>
        </section>
        <section className={cls.apearBoxes}>
          <div onMouseOut={handleExplore} className={`${cls.apearExploreBox} ${exploreActive && cls.apearActive}`}>
            {
              explore.map(item => (
                <Link className={cls.exploreTitles} key={item.id} to={item.to}> {item.title} </Link>
              ))
            }
          </div>
          <div onMouseOut={handlePages} className={`${cls.apearPagesBox} ${pagesAcive && cls.apearActive}`}>
            {
              pages.map(item => (
                <Link className={cls.pagesTitles} key={item.id} to={item.to}> {item.title} </Link>
              ))
            }
          </div>
        </section>
      </header>

    </>
  )
}
