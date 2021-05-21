import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from '../auth/Login/Login';
import Navbar from '../shared/Navbar/Navbar';
import Sidebar from '../shared/Sidebar/Sidebar';
import Home from '../views/Home/Home';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <div style={{ paddingTop: '60px' }}>
          <Switch>
            <Route exact path="/cartelera" component={Home} />
            <Route exact path="/login" component={Login} />
            <Redirect to="/cartelera"/>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default AppRouter
