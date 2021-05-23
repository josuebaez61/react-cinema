import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';
import FloatingButton from '../components/FloatingButton/FloatingButton';
import SearchModal from '../components/SearchModal/SearchModal';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';
import Sidebar from '../shared/Sidebar/Sidebar';
import { RootState } from '../store';
import { showSearchModal } from '../store/actions/searchActions';
import { hideSidebar } from '../store/actions/sidebarActions';
import Home from '../views/Home/Home';

const AppRouter = () => {
  const { show: showSearch } = useSelector((state: RootState) => state.search);
  const { show: showSidebar } = useSelector((state: RootState) => state.sidebar);
  const dispatch = useDispatch();

  const onFloatingButtonClick = () => {
    dispatch(showSearchModal());
    showSidebar && dispatch(hideSidebar());
  }

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
        <SearchModal visible={ showSearch }/>
        <FloatingButton 
          className="p-d-flex p-d-md-none animate__animated animate__fadeInUp"
          onClick={ onFloatingButtonClick }
          icon={ faSearch }
          position="right"
        />
      </div>
    </Router>
  )
}

export default AppRouter
