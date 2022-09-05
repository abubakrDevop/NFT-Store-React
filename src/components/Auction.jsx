import React from 'react'
import cls from './styled/Auction.module.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ShareIcon, StarIcon } from '@heroicons/react/outline'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'

export default function Auction() {
  const [data, setData] = React.useState()

  axios.get('')
    .then(res => {
      setData(res.data)
    })

  if (!data) {
    return null
  }

  return (
    <div className={cls.auction}>
      <section className={cls.TitleBox}>
        <h1 className={cls.headTitle}>Live Auctions</h1>
        <section className={cls.controls}>
          <IoMdArrowBack className={cls.icon} />
          <IoMdArrowForward className={cls.icon} />
        </section>
      </section>
      <section className={cls.flex}>
      <div className={cls.cardBox}>
          <section className={cls.flex}>
            <h1 className={cls.autor}>
              <img className={cls.autorImg} src="./images/NFT.png" alt="" />
              Created by @Alex
            </h1>
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
