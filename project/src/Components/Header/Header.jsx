import Logo from './Logo';
import './Header.css';
import Nav from './Nav/Nav.jsx';

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