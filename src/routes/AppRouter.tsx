import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';
import Footer from '../shared/Footer/Footer';
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
        <div style={{ paddingTop: '60px', minHeight:"calc(100vh - 300px)" }}>
          <Switch>
            <Route exact path="/cartelera" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Redirect to="/cartelera" />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default AppRouter
