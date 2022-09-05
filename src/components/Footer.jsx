import React from 'react'
import cls from './styled/Footer.module.scss'
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoApple } from 'react-icons/io'

export default function Footer() {
  return (
    <div className={cls.footer}>
      <section className={cls.upperTitles}>
        <section className={cls.section}>
          <h1 className={cls.headTitle}>About Us</h1>
          <p className={cls.title}>Poetic taken a torn return emerged. Or thought. Variety a its<br/>parents time the oparents this as the of been logbook.</p>
          <section className={cls.icons}>
            <span className={cls.icon}><IoLogoFacebook /></span>
            <span className={cls.icon}><IoLogoTwitter /></span>
            <span className={cls.icon}><IoLogoInstagram /></span>
            <span className={cls.icon}><IoLogoApple /></span>
          </section>
        </section>
        <section className={cls.section}>
          <h1 className={cls.headTitle}>Contact</h1>
          <p className={`${cls.title} ${cls.titles}`}>12 New Elephant Road, P.O. 1334 NY,<br/>United States</p>
          <p className={`${cls.title} ${cls.titles}`}>P. 012 345 678 90</p>
          <p className={`${cls.title} ${cls.titles}`}>E. support@themeix.com</p>
        </section>
        <section className={cls.section}>
          <h1 className={cls.headTitle}>Web Links</h1>
          <p className={`${cls.title} ${cls.titles}`}>Collections</p>
          <p className={`${cls.title} ${cls.titles}`}>Item Details</p>
          <p className={`${cls.title} ${cls.titles}`}>Rankings</p>
          <p className={`${cls.title} ${cls.titles}`}>User Profile</p>
        </section>
        <section className={cls.section}>
          <h1 className={cls.headTitle}>My Account</h1>
          <p className={`${cls.title} ${cls.titles}`}>Creator Dashboard</p>
          <p className={`${cls.title} ${cls.titles}`}>Wallet</p>
          <p className={`${cls.title} ${cls.titles}`}>Create Item</p>
          <p className={`${cls.title} ${cls.titles}`}>My Account</p>
        </section>
      </section>
      <section className={cls.downTitles}>
        <p className={cls.title}>© Copyright - 2022 Tokenbay - Designed by Themeix</p>
        <p className={cls.title}>Privacy Policy | Term of Service</p>
      </section>
    </div>
  ) 
}
