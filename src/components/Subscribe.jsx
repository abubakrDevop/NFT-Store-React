import React from 'react'
import cls from './/styled/Subscribe.module.scss'
import { useForm } from 'react-hook-form'
import { Form } from '../helpers/form'
import axios from 'axios'

export default function Subscribe() {
  const {
    formState,
    reset,
    register,
    handleSubmit
  } = useForm()

  const onSubmit = (data) => {
    axios.post('')
      .then(res => {
        if (res.data) {
          reset()
        }
      })
  }

  return (
    <div className={cls.subscribe}>
      <h1 className={cls.headTitle}>Subscribe to the <span className={cls.color}>Newsletter</span></h1>
      <p className={cls.title}>Receive our latest thinking, insights, and provocations on creating hyper-innovative teams and organisations <br /> that build the future. Delivered every Sunday. 1-click unsubscribe anytime.</p>
      <form onSubmit={handleSubmit(onSubmit)} className={cls.inputBox}>
        <input 
          className={cls.input} 
          type="email" 
          placeholder={`${formState.errors.email ? formState.errors.email.message : 'Email Address'}`} 
          {...register('email', Form.Option.email)}
        />
        <button type='submit' className={cls.button}>Subscribe</button>
      </form>
    </div>
  )
}
