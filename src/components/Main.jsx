import React from 'react'
import cls from './styled/Main.module.scss'
import { Link } from 'react-router-dom'
import ExploreItems from './ExploreItems'
import NftSeller from './NftSeller'
// import Auction from './Auction'
import Footer from './Footer'
import Category from './Category'
import Subscribe from './Subscribe'

export default function Main() {
  return (
    <div className={cls.headMainBox}> 
      <h1 className={cls.headTitle}>Create, Sell Unique & Rare</h1>
      <h1 className={cls.headTitle}>Digital Artworks.</h1>
      <p className={cls.title}>Create a Beautiful NFT products. Explore the best 
        collection from <br/> popular craetive & digital Artists.</p>
      <section className={cls.buttons}>
        <Link className={`${cls.button} ${cls.hover1}`} to={''} >Explore items</Link>
        <Link className={`${cls.button} ${cls.hover2}`} to={''} >Connect wallet</Link>
      </section>
      <section className={cls.otherInfo}>
        <div className={cls.flex}>
          <h1 className={cls.infoTitle}>6k+</h1>
          <p className={cls.lowerTitle}>Digital Artworks</p>
        </div>
        <div className={cls.flex}>
          <h1 className={cls.infoTitle}>16k+</h1>
          <p className={cls.lowerTitle}>Creative Creators</p>
        </div>
        <div className={cls.flex}>
          <h1 className={cls.infoTitle}>9k+</h1>
          <p className={cls.lowerTitle}>Real Arts buyer</p>
        </div>
      </section>
      <ExploreItems />
      <NftSeller />
      <Category />
      <Subscribe />
      <Footer />
    </div>
  )
}
