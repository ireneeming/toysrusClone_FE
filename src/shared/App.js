import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { history } from '../redux/configureStore'
import { ConnectedRouter } from 'connected-react-router'

import Main from '../pages/Main'
import Detail from '../pages/Detail'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Rank from '../components/Rank'

import TopButton from '../components/TopButton'
import ScrollToTop from './ScrollRestoration'


function App() {
  return (
    <>
     
      <ConnectedRouter history={history}>
        <ScrollToTop />
        <Route path="/" exact component={Main} />
        <Route path="/item/:itemId" exact component={Detail} />
        <Route path="/cart/" exact component={Cart} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/rank" exact component={Rank} />
      </ConnectedRouter>
      <TopButton/>
      
    </>
  )
}

export default App
