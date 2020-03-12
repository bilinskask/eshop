import React, { useState } from 'react'
import Modal from 'react-modal'
import classes from './CreateProductModal.module.css'
import { random } from 'faker'
import axios from 'axios'

//qunatity is string
//close modal on cancel
//show success message and clear input fields

export const CreateProductModal = ({ isModalOpen, toggleModal }) => {
  const [formState, setFormState] = useState({
    id: random.uuid(),
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    image: `https://picsum.photos/id/${random.number(200) || 1}/600`
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const generateDescriptionHandler = event => {
    event.preventDefault()
    setFormState({
      ...formState,
      description: random.words(250)
    })
  }

  const validate = () => {
    let isFormValid = true
    const errors = {}
    if (!formState.name || formState.name.length < 5) {
      isFormValid = false
      errors.name = 'Name must be at least 5 characters'
    }
    if (!formState.quantity || formState.quantity <= 0) {
      isFormValid = false
      errors.quantity = 'Quantity is required'
    }
    if (!formState.price) {
      isFormValid = false
      errors.price = 'Price is required'
    }
    console.log(errors)
    setErrors(errors)
    return isFormValid
  }

  const quantityChangeHandler = event => {
    const numberQuantity = Number(event.target.value)
    const quantity = numberQuantity <= 0 ? 0 : numberQuantity
    setFormState({ ...formState, quantity })
  }

  // const priceChangeHandler = event => {
  //   const priceNumber = Number(event.target.value)
  //   const price = priceNumber.toFixed(2)
  //   setFormState({ ...formState, price })
  // }

  const inputChangeHandler = (formStateKey, event) => {
    setFormState({
      ...formState,
      [formStateKey]: event.target.value
    })
  }

  const formSubmitHandler = async event => {
    event.preventDefault()
    if (validate()) {
      const formStateCopy = {
        ...formState,
        price: Number(formState.price).toFixed(2)
      }
      const response = await axios.post('http://localhost:4000/products', {
        ...formStateCopy
      })
      response.status === 201 && setSuccess(true)
    }
  }

  const resetForm = () => {
    setFormState({
      ...formState,
      name: '',
      description: '',
      price: 0,
      quantity: ''
    })
    setSuccess(false)
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={toggleModal}
      ariaHideApp={false}
    >
      <div>
        <h2 className={classes.heading}>Create product</h2>
        {success ? (
          <>
            <h2>Product Created</h2>
            <div className={classes.buttonList}>
              <button onClick={toggleModal}>Cancer</button>
              <button onClick={resetForm}>Create</button>
            </div>
          </>
        ) : (
          <form onSubmit={formSubmitHandler}>
            <div className={classes.formControl}>
              <label htmlFor='name'>Product name</label>
              <input
                type='text'
                id='name'
                value={formState.name}
                onInput={event => inputChangeHandler('name', event)}
              />
              {errors.name && (
                <div className={classes.error}>{errors.name}</div>
              )}
            </div>
            <div className={classes.formControl}>
              <label htmlFor='description'>Description</label>
              <textarea
                id='description'
                rows='4'
                value={formState.description}
                onInput={event => inputChangeHandler('description', event)}
              ></textarea>
              {errors.description && (
                <div className={classes.error}>{errors.description}</div>
              )}
              <button onClick={generateDescriptionHandler}>
                Generate Description
              </button>
            </div>
            <div className={classes.formControl}>
              <label htmlFor='price'>Price</label>
              <input
                type='number'
                id='price'
                value={formState.price}
                onInput={event => inputChangeHandler('price', event)}
              />
              {errors.price && (
                <div className={classes.error}>{errors.price}</div>
              )}
            </div>
            <div className={classes.formControl}>
              <label htmlFor='quantity'>Quantity</label>
              <input
                type='number'
                id='quantity'
                value={formState.quantity}
                onInput={quantityChangeHandler}
              />
              {errors.quantity && (
                <div className={classes.error}>{errors.quantity}</div>
              )}
            </div>
            <div className={classes.buttonList}>
              <button onClick={toggleModal}>Cancer</button>
              <button>Create</button>
            </div>
          </form>
        )}
      </div>
    </Modal>
  )
}
