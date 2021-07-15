import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';
import FloatingButton from '../components/FloatingButton/FloatingButton';
import SearchModal from '../components/SearchModal/SearchModal';
import { fb } from '../firebase';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';
import Sidebar from '../shared/Sidebar/Sidebar';
import { RootState } from '../store';
import { login } from '../store/actions/authActions';
import { showSearchModal } from '../store/actions/searchActions';
import { hideSidebar } from '../store/actions/sidebarActions';
import Additional from '../views/Additional/Additional';
import Additionals from '../views/Additionals/Additionals';
import Cart from '../views/Cart/Cart';
import Cinemas from '../views/Cinemas/Cinemas';
import Contact from '../views/Contact/Contact';
import Home from '../views/Home/Home';
import MovieDetail from '../views/MovieDetail/MovieDetail';
import Search from '../views/Search/Search';
import UserScreen from '../views/UserScreen/UserScreen';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const { show: showSearch } = useSelector((state: RootState) => state.search);
  const { show: showSidebar } = useSelector((state: RootState) => state.sidebar);
  // const {  } = useSelector((state: RootState) => state.auth);
  const [isLogged, setIsLogged] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const dispatch = useDispatch();



  const onFloatingButtonClick = () => {
    dispatch(showSearchModal());
    showSidebar && dispatch(hideSidebar());
  }

  useEffect(() => {
    fb.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.displayName, user.email, user.uid))
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
      setCheckingSession(false);
    })
  }, [])

  if (checkingSession) {
    return (
      <h1>Checking</h1>
    )
  }

  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <div style={{ paddingTop: '60px', minHeight: "calc(100vh - 300px)" }}>
          <Switch>
            <Route exact path="/cartelera" component={Home} />
            <Route exact path="/cinemas" component={Cinemas} />
            <PublicRoute exact path="/login" component={Login} isAuthenticated={isLogged} />
            <PublicRoute exact path="/register" component={Register} isAuthenticated={isLogged} />
            <Route exact path="/contacto" component={Contact} />
            <Route exact path="/movie/:id" component={MovieDetail} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/additionals" component={Additionals} />
            <Route exact path="/additional/:id" component={Additional} />
            <PrivateRoute exact path="/cart" component={Cart} isAuthenticated={isLogged} />
            <PrivateRoute exact path="/user-screen" component={UserScreen} isAuthenticated={isLogged} />
            <Redirect to="/cartelera" />
          </Switch>
        </div>
        <Footer />
        <SearchModal visible={showSearch} />
        <FloatingButton
          className="p-d-flex p-d-md-none animate__animated animate__fadeInUp"
          onClick={onFloatingButtonClick}
          icon={faSearch}
          position="right"
        />
      </div>
    </Router>
  )
}

export default AppRouter
