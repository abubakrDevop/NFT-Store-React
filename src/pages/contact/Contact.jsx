import React from 'react'
import cls from './styled/Contact.module.scss'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Form } from '../../helpers/form'
import { IoIosPhonePortrait, IoIosMail } from 'react-icons/io'
import Footer from '../../components/Footer'
import axios from 'axios'

export default function Contact() {
  const { 
    formState,
    // reset,
    register,
    handleSubmit
  } = useForm()

  const onSubmit = (data) => {
    axios.post('')
      .then(res => {})
  }

  return (
    <div className={cls.contact}>
      <div className={cls.padding}>
      <h1 className={cls.headTitle}>Contact Us</h1>
      <p className={cls.subTitle}>
        <Link className={cls.subTitle} to={''}>Home</Link> / Contact Us
      </p>
      <section className={cls.headSection}>
        <section className={cls.section}>
          <div className={cls.titleBox}>
            <h1 className={cls.headText}>Get in touch</h1>
            <p className={`${cls.text} ${cls.text2}`}>Adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis Etiam porta sem malesuada magna <br /> mollis Nulla vitae elit libero, a pharetra augue. Donec sed odio dui.</p>
          </div>
          <div className={cls.titleBox}>
            <h1 className={`${cls.headText} ${cls.headText2}`}>Open Hours</h1>
            <p className={cls.text}>Monday-Friday: 07AM - 5PM</p>
            <p className={cls.text}>Saturday-Sunday: 09AM - 5PM</p>
          </div>
          <div className={cls.titleBox}>
            <h1 className={`${cls.headText} ${cls.headText2}`}>Here following or contact information</h1>
            <p className={cls.text}>
              <IoIosPhonePortrait className={cls.icon} />
              +1 (123) 123 4567
            </p>
            <p className={cls.text}>
              <IoIosMail className={cls.icon} />
              support@themeix.com
            </p>
          </div>
        </section>
        <section className={cls.section}>
          <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
            <h1 className={cls.headText}>Send us message</h1>
            <p className={cls.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <input 
              className={`${cls.input} ${formState.errors.name && cls.errors}`} 
              type="text" placeholder='Name...' 
              {...register('name', Form.Option.name)}
            />

            <input
              className={`${cls.input} ${formState.errors.email && cls.errors}`} 
              type="text" placeholder='Email...' 
              {...register('email', Form.Option.email)}
            />

            <input 
              className={`${cls.input} ${formState.errors.request && cls.errors}`} 
              type="text"
              placeholder='Request...' 
              {...register('request', Form.Option.allInputs)}
            />

            <textarea 
              className={`${cls.input} ${cls.textarea} ${formState.errors.message && cls.errors}`} 
              cols="30" rows="10"
              placeholder='Message...'
              {...register('message', Form.Option.allInputs)}
            ></textarea>

            <button className={cls.button}>Send Message</button>
          </form>
        </section>
      </section>
      </div>
      <Footer />
    </div> 
  )
}
