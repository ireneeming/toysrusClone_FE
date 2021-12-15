import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { history } from '../redux/configureStore'
import { ConnectedRouter } from 'connected-react-router'

import Main from '../pages/Main'
import Detail from '../pages/Detail'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Header from '../components/Header'
import TopButton from '../components/TopButton'
import ScrollToTop from './ScrollRestoration'

function App() {
  return (
    <>
      <Header></Header>
      <ConnectedRouter history={history}>
        <ScrollToTop />
        <Route path="/" exact component={Main} />
        <Route path="/detail/:itemId" exact component={Detail} />
        <Route path="/cart/:userId" exact component={Cart} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </ConnectedRouter>
      <TopButton></TopButton>
    </>
  )
}

export default App
