import React from 'react'
import classes from './Product.module.css'

export const Product = ({ product }) => {
  const { image, name, description, price, quantity } = product
  // const shortDescription = description.substring(0, 100) + '...'
  const shortDescription =
    (description || '')
      .split(' ')
      .splice(0, 20)
      .join(' ') + '...'
  return (
    <div className={classes.product}>
      <div className={classes.image}>
        <img src={image} alt={name} />
      </div>
      <div className={classes.productName}>{name}</div>
      <div className={classes.shortDescription}>{shortDescription}</div>
      <div className={classes.bold}>Price: {price}€</div>
      <div className={classes.bold}>Quantity: {quantity}</div>
      <div className={classes.buttonList}>
        <button>Add to cart</button>
        <button>Preview</button>
      </div>
    </div>
  )
}
