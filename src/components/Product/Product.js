import React from 'react'

export const Product = ({ product }) => {
  const { image, name, description, price, quantity } = product
  return (
    <div className='product'>
      <div className='image'>
        <img src={image} alt={name} />
      </div>
      <div className='name'>{name}</div>
      <div className='short-description'>{description}</div>
      <div className='price'>{price}</div>
      <div className='quantity'>{quantity}</div>
      <div className='button-list'>
        <button>Add to Cart</button>
        <button>Preview</button>
      </div>
    </div>
  )
}
