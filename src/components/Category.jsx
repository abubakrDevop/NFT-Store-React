import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import cls from './styled/Category.module.scss'

export default function Category() {
  const [data, setData] = React.useState()

  axios.get('')
    .then(res => {
      setData(res.data)
    })

  if (!data) {
    return null
  }
  
  return (
    <div className={cls.category}>
      <h1 className={cls.headTitle}>Category</h1>
      <section className={cls.cards}>
        <Link className={cls.card} to={''}>
          <img className={cls.image} src="" alt="" />
          <h2 className={cls.title}>Creative</h2>
          <p className={cls.subTitle}>120 Items</p>
        </Link>
      </section>
    </div> 
  )
}
