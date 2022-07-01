import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import Main from './main/Main';
import App from './App';

function Layout() {
  return (
    <>
      <Header/>
      <Outlet>
      <Main/>
      </Outlet>
      <footer>2021</footer>

    </>
  );
}

export default Layout;