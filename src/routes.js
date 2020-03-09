import Products from './pages/Products'
import { Error } from './pages/404/404'
import { Cart } from './pages/Cart/Cart'
import { Orders } from './pages/Orders/Orders'

export const routes = [
  {
    isExaxt: true,
    component: Products,
    path: '/',
    label: 'Products'
  },
  {
    isExaxt: true,
    component: Cart,
    path: '/cart',
    label: 'Cart'
  },
  {
    isExaxt: true,
    component: Orders,
    path: '/orders',
    label: 'Orders'
  },
  {
    isExaxt: true,
    component: Error,
    path: '/404',
    label: '404'
  }
]
