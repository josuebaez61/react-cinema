import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useEffect, useState } from 'react'
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
import { CartContext } from '../context/CartContext';
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
import ItemNotFound from '../views/ItemNotFound/ItemNotFound';
import MovieDetail from '../views/MovieDetail/MovieDetail';
import Search from '../views/Search/Search';
import UserScreen from '../views/UserScreen/UserScreen';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { History } from 'history';
import LoadingAppScreen from '../views/LoadingAppScreen/LoadingAppScreen';

const AppRouter = () => {
  const { show: showSearch } = useSelector((state: RootState) => state.search);
  const { show: showSidebar } = useSelector((state: RootState) => state.sidebar);
  const { getTotalQuantityOfItems } = useContext(CartContext);
  const [isLogged, setIsLogged] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const dispatch = useDispatch();

  const onFloatingButtonClick = (e: React.MouseEvent<Element, MouseEvent>, history: History<unknown>) => {
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
  }, [dispatch, setIsLogged, setCheckingSession])

  if (checkingSession) {
    return (
      <LoadingAppScreen />
    )
  }

  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />

        <div style={{ paddingTop: '60px', minHeight: "calc(100vh - 300px)" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cinemas" component={Cinemas} />
            <PublicRoute exact path="/login" component={Login} isAuthenticated={isLogged} />
            <PublicRoute exact path="/register" component={Register} isAuthenticated={isLogged} />
            <Route exact path="/contacto" component={Contact} />
            <Route exact path="/movie/:id" component={MovieDetail} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/additionals" component={Additionals} />
            <Route exact path="/additional/:id" component={Additional} />
            <Route exact path="/not-found" component={ItemNotFound} />
            <PrivateRoute exact path="/cart" component={Cart} isAuthenticated={isLogged} />
            <PrivateRoute exact path="/user-screen" component={UserScreen} isAuthenticated={isLogged} />
            <Redirect to="/" />
          </Switch>
        </div>
        <Footer />
        <SearchModal visible={showSearch} />
        <FloatingButton
          className="p-d-flex p-d-lg-none animate__animated animate__fadeInUp"
          onClick={onFloatingButtonClick}
          icon={faSearch}
          position="right"
        />
        {
          isLogged &&
          <FloatingButton
            showBadge={getTotalQuantityOfItems() > 0}
            badgeValue={getTotalQuantityOfItems()}
            className="p-d-flex p-d-lg-none animate__animated animate__fadeInUp floating-button-black"
            onClick={(e, history) => history.push('/cart') }
            icon={faShoppingCart}
            position="left"
          />
        }
      </div>
    </Router>
  )
}

export default AppRouter
