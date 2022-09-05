import React from 'react'
import cls from './styled/NftSeller.module.scss'
import axios from 'axios'
import { IoIosCopy } from 'react-icons/io'

export default function NftSeller() {
  const [data, setData] = React.useState()

  axios.get('')
    .then(res => {
      setData(res.data)
    })

  if (!data) {
    return null
  }

  return (
    <div className={cls.nftSeller}>
      <h1 className={cls.headTitle}>Top NFT Seller</h1>
      <div className={cls.flex}>
      <div className={cls.cardBox}>
        <img className={cls.headImage} src="./images/NFT.png" alt="images" />
        <section className={cls.section}>
          <img className={cls.autorImage} src="./images/NFT.png" alt="images" />
          <div>
            <h2 className={cls.name}>Robert Adam</h2>
            <p className={cls.url}>
              0xd07dc42.....243
              <IoIosCopy className={cls.icon} />
            </p>
          </div>
        </section>
        <section className={cls.section}>
          <div>
            <p className={cls.text1}>860</p>
            <p className={cls.text2}>Followers</p>
          </div>
          <div>
            <p className={cls.text1}>16</p>
            <p className={cls.text2}>Items</p>
          </div>
        </section>
        <button className={cls.button}>+ Follow</button>
      </div>
      </div>
    </div>
  ) 
}
