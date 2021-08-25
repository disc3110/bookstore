import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import './style/app.css'
import Categories from './pages/categories/Categories';
import Home from './pages/home/Home';
import Header from './components/Header';
import NotMatch from './pages/NotMatch';

const App = () => (
  <div>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
