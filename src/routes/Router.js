import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignupPage/SignUpPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
// import RestaurantDetailsPage from '../pages/RestaurantDetailsPage/RestaurantDetailsPage'
// import CartPage from '../pages/CartPage/CartPage'
// import ErrorPage from '../pages/ErrorPage/ErrorPage'
import RegisterAddressPage from '../pages/RegisterAdressPage/RegisterAdressPage'
import EditProfilePage from '../pages/EditProfilePage/EditProfilePage'
import EditAdressPage from '../pages/EditAdressPage/EditAdressPage'

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
          <SignUpPage />
        </Route>

        <Route exact path='/cadastro/endereco'>
          <RegisterAddressPage />
        </Route>

        <Route exact path='/perfil'>
          <ProfilePage />
        </Route>

        <Route exact path='/perfil/editar'>
          <EditProfilePage />
        </Route>
        
        <Route exact path='/perfil/editar/endereco'>
          <EditAdressPage />
        </Route>
        {/*
        <Route exact path='/restaurante/:id'>
          <RestaurantDetailsPage />
        </Route>

        <Route exact path='/carrinho'>
          <CartPage />
        </Route> */}

        {/* <Route>
          <ErrorPage />
        </Route> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Router