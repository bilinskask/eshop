import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

import Nav from './components/Nav'
import { Container } from './components/Shared/Container/Container'
import { routes } from './routes'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Nav />
        <main>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                patch={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
          </Switch>
        </main>
        <footer>Cia yra footer</footer>
      </Container>
    </BrowserRouter>
  )
}

export default App
