import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
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