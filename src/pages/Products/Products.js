import React, { Component } from 'react'
import axios from 'axios'
import Product from '../../components/Product'
import { Flex } from '../../components/Shared/Flex/Flex'
import classes from './Products.module.css'
import { CreateProductModal } from '../../components/CreateProductModal/CreateProductModal'

export default class Products extends Component {
  state = {
    products: [],
    isModalOpen: false
  }

  componentDidMount() {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:4000/products')
      const products = response.data
      this.setState({ products })
    }
    fetchProducts()
  }

  toggleModalHandler = () =>
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen
    }))

  render() {
    const { products, isModalOpen } = this.state
    return (
      <>
        <div className={classes.buttonWrapper}>
          <button onClick={this.toggleModalHandler}>Create Product</button>
        </div>
        <Flex wrap='wrap' justify='space-between'>
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </Flex>
        <CreateProductModal
          isModalOpen={isModalOpen}
          toggleModal={this.toggleModalHandler}
        />
      </>
    )
  }
}
