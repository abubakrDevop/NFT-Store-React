import React from 'react'
import { Link } from 'react-router-dom'
import { ShareIcon, StarIcon } from '@heroicons/react/outline'
import { IoIosHeart } from 'react-icons/io'
import cls from './styled/ExploreItems.module.scss'

export default function ExploreItems() {
  return (
    <div className={cls.exploreItems}>
      <section className={cls.header}>
        <h1 className={cls.headTitle}>Explore Items</h1>
        <section className={cls.buttons}>
          <Link className={cls.button} to={''}>All</Link>
          <Link className={cls.button} to={''}>Best Seller</Link>
          <Link className={cls.button} to={''}>Popular Item</Link>
        </section>
      </section>
      <section className={cls.footer}>
        <div className={cls.cardBox}>
          <section className={cls.flex}>
            <h1 className={cls.autor}>
              <img className={cls.autorImg} src="./images/NFT.png" alt="" />
              Created by @Alex
            </h1>
            <button className={cls.like}>
              <IoIosHeart className={cls.icon}></IoIosHeart>
              62
            </button>
          </section>
          <img className={cls.image} src="./images/NFT.png" alt="images" />
          <h1 className={cls.headTitle}>Skyblue Creator</h1>
          <section className={cls.flex2}>
            <p className={cls.leftTitle}>6 in stock</p>
            <p className={cls.price}>
              <img className={cls.logo} src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-Pic.png" alt="logo" />
              4.06 ETH
            </p>
          </section>
          <section className={cls.buttons}>
            <Link className={cls.buyBtn} to={''}>Buy Now</Link>
            <section className={cls.icons}>
              <ShareIcon className={cls.icon}></ShareIcon>
              <StarIcon className={cls.icon}></StarIcon>
            </section>
          </section>
        </div>
      </section>
    </div>
  )
}
