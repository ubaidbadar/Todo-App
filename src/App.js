import React from 'react';
import SideNav from './components/SideNav/SideNav';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditCreate from './components/EditCreate/EditCreate';
import Home from './components/Home/Home';
import View from './components/View/View';

const App = () => (
  <BrowserRouter>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <SideNav />
    <div className='TodoRoutes'>
      <Switch className='TodoRoutes'>
        <Route path='/edit/:id' component={EditCreate} />
        <Route path='/add' component={EditCreate} />
        <Route path='/view/:id' component={View} />
        <Route path='/important' component={Home} />
        <Route e path='/' component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;
