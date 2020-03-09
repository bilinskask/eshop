import React from 'react'
import classes from './Flex.module.css'
import { justifyHelper, alignHelper } from './utils'

export const Flex = ({ children, justify, className, align }) => {
  const styles = [classes.flex, className]
  justifyHelper(styles, justify, classes)
  alignHelper(styles, align, classes)

  return <div className={styles.join(' ')}>{children}</div>
}
