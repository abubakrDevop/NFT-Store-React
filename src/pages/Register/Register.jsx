import React from 'react'
import axios from 'axios'
import cls from './styled/Register.module.scss'
import { Link } from 'react-router-dom'
import { Form } from '../../helpers/form/index'
import { useForm } from 'react-hook-form'
import { IoIosPerson, IoIosMail, IoIosLock, IoLogoFacebook } from 'react-icons/io'
import Footer from '../../components/Footer'

export default function Register() {
  const {
    formState,
    reset,
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    const body = {
      email: data.email,
      password: data.password,
      isTrue: data.checkbox
    }

    axios.post('', body)
      .then(result => {
        if (result) {
          
        }
      })
      .catch(error => {
        if (error) {
          reset()
        }
      })
  }

  return (
    <div className={cls.container}>
      <h1 className={cls.headTitle}>Register</h1>
      <p className={cls.title}>
        <Link className={cls.title} to={'/'}>Home / </Link> Register
      </p>
      <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>

        {
          formState.errors.fullname && <span className={cls.errors}> {formState.errors.fullname.message} </span>
        }

        <div className={cls.inputBox}>
          <IoIosPerson className={cls.icon}></IoIosPerson>
          <input 
            className={cls.input} 
            type="text" 
            placeholder='Full name...' 
            {...register('fullname', Form.Option.name)}
          />
        </div>

        {
          formState.errors.lastname && <span className={cls.errors}> {formState.errors.lastname.message} </span>
        }

        <div className={cls.inputBox}>
          <IoIosPerson className={cls.icon}></IoIosPerson>
          <input 
            className={cls.input} 
            type="text" 
            placeholder='Last name...' 
            {...register('lastname', Form.Option.name)}
          />
        </div>

        {
          formState.errors.email && <span className={cls.errors}> {formState.errors.email.message} </span>
        }

        <div className={cls.inputBox}>
          <IoIosMail className={cls.icon}></IoIosMail>
          <input 
            className={cls.input} 
            type="email" 
            placeholder='Your email...' 
            {...register('email', Form.Option.email)}
          />
        </div>

        {
          formState.errors.password1 && <span className={cls.errors}> {formState.errors.password1.message} </span>
        }

        <div className={cls.inputBox}>
          <IoIosLock className={cls.icon}></IoIosLock>
          <input 
            className={cls.input} 
            type="password" 
            placeholder='Create password...' 
            {...register('password1', Form.Option.password)}
          />
        </div>

        {
          formState.errors.password2 && <span className={cls.errors}> {formState.errors.password2.message} </span>
        }

        <div className={cls.inputBox}>
          <IoIosLock className={cls.icon}></IoIosLock>
          <input 
            className={cls.input} 
            type="password" 
            placeholder='Repead password...' 
            {...register('password2', Form.Option.password)}
          />
        </div>

        <div className={cls.checkboxField}>
          <input 
            className={cls.checkbox} 
            type="checkbox" 
            {...register('checkbox')}
          />
          <span className={cls.checkTitle}>Do you want to be the creator of NFT?</span>
        </div>

        <button className={cls.registerBtn} type='submit'>Continue </button>
        <p className={cls.title}>Already have an account? 
          <Link className={cls.loginLink} to={'/login'}> Sign in</Link>
        </p>
        <section className={cls.buttons}>
          <google className={cls.button}>
            <img src='./images/google.png' alt='google' className={cls.icon}/>
            Google
          </google> 
          <facebook className={cls.button}>
            <IoLogoFacebook className={cls.icon}/>
            Facebook
          </facebook>
        </section>
      </form>
      <Footer />
    </div> 
  )
}
