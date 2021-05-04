import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import RestaurantDetailsPage from '../pages/RestaurantDetailsPage/RestaurantDetailsPage'
import CartPage from '../pages/CartPage/CartPage'

import ErrorPage from '../pages/ErrorPage/ErrorPage'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route exact path='/login'>
          <LoginPage />
        </Route>

        <Route exact path='/cadastro'>
          <SignupPage />
        </Route>

        <Route exact path='/perfil'>
          <ProfilePage />
        </Route>

        <Route exact path='/restaurante/:id'>
          <RestaurantDetailsPage />
        </Route>

        <Route exact path='/carrinho'>
          <CartPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router