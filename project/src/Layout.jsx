import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import Main from './main/Main';
import App from './App';
import Footer from './footer/Footer';
import {Provider} from 'react-redux';
import store from './redux/index.js';

function Layout() {
  return (
    <>
    <Provider store={store}>
      <Header/>
      <Outlet>
        <Main/>
      </Outlet>
      <Footer/>
    </Provider>

    </>
  );
}

export default Layout;