import React from 'react'
import classes from './Nav.module.css'
import { Flex } from '../Shared/Flex/Flex'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <Flex
      justify='space-between'
      className={classes.navContainer}
      align='center'
    >
      <div>
        <Link className={classes.bigLink} to='/'>
          Super Parde
        </Link>
      </div>
      <nav>
        <Flex>
          <Link className={classes.link} to='/'>
            Products
          </Link>
          <Link className={classes.link} to='/orders'>
            Orders
          </Link>
          <Link className={classes.link} to='/cart'>
            Cart
          </Link>
        </Flex>
      </nav>
    </Flex>
  )
}
