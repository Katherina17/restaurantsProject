import Logo from './Logo';
import '../style/header-style/HeaderModule.css';
import Nav from './Nav.jsx';

function Header(){
    return (
        <header>
            <div className='wrapper'>
                <div id='header-container'>
                    <Logo/>
                    <Nav/>
                </div>
            </div>
        </header>
    )
}

export default Header;