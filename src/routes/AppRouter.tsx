import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default AppRouter
