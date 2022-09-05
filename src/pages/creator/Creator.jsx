import React from 'react'
import cls from './styled/Creator.module.scss'
import { Link } from 'react-router-dom'
import { Form } from '../../helpers/form'
import { useForm } from 'react-hook-form'
import { CloudUploadIcon } from '@heroicons/react/outline'
import axios from 'axios'

export default function Creator() {
  const {
    formState,
    // reset,
    register,
    handleSubmit
  } = useForm()

  const [imageUrl, setImageUrl] = React.useState()

  const fileReader = new FileReader()
  fileReader.onloadend = () => {
    setImageUrl(fileReader.result)
  }
  
  function handleFiles(e) {
    e.preventDefault()
    const file = e.target.files[0]
    fileReader.readAsDataURL(file)
  }

  const onSubmit = (data) => {
    axios.post('')
      .then(res => {})
      .catch(err => {})
  }

  return (
    <div className={cls.creator}>
      <h1 className={cls.headTitle}>Create Item</h1>
      <p className={cls.link}>
        <Link className={cls.link} to={''}>Home</Link> / Create Item
      </p>
      <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
        <section className={`${cls.imageField} ${cls.section}`}>
          <div className={`${cls.dashed} ${formState.errors.file && cls.dashedError}`}>
            <label className={cls.label} htmlFor="file">
              <h1 className={cls.fileFormat}>
                {!imageUrl ? 'PNG, JPG, GIF, WEBP or MP4, Max 15mb' : 'Uploaded Successfully'}
              </h1>
              <p className={`${cls.chooseBtn} ${imageUrl && cls.uploaded}`}>Choose File
                <CloudUploadIcon className={cls.icon} />
              </p>
              <input 
                id='file' 
                className={cls.file} 
                type="file" 
                onChange={handleFiles} 
                // {...register('file', Form.Option.allInputs)}
              />
            </label>
          </div>
        </section>
        <section className={`${cls.inputFields} ${cls.section}`}>

          <div className={cls.inputBox}>
            <p className={cls.title}>Title</p>
            <input 
              className={`${cls.input} ${formState.errors.title && cls.inputError}`} 
              type="text" 
              placeholder='eg: Cybar Boss & Mega Boss #3' 
              {...register('title', Form.Option.allInputs)}
            />
          </div>

          <div className={cls.inputBox}>
            <p className={cls.title}>Description</p>
            <textarea 
              className={`${cls.input} ${formState.errors.description && cls.inputError}`} 
              type="text" 
              placeholder='eg: Cybar Boss & Mega Boss #3' 
              {...register('description', Form.Option.allInputs)}
            />
          </div>

          <div className={cls.inputBox}>
            <p className={cls.title}>Price</p>
            <input 
              className={`${cls.input} ${formState.errors.cripto && cls.inputError}`} 
              type="text" 
              placeholder='ETH' 
              {...register('cripto', Form.Option.allInputs)}
            />
          </div>

          <div className={cls.inputBox}>
            <p className={cls.title}>Offer Price</p>
            <input 
              className={`${cls.input} ${formState.errors.price && cls.inputError}`} 
              type="text" 
              placeholder='Suggested 0,10%, 20% 30% Maximum is 70%' 
              {...register('price', Form.Option.allInputs)}
            />
          </div>

          <button type='submit' className={cls.createBtn}>Create Item</button>

        </section>
      </form>
    </div> 
  )
}
