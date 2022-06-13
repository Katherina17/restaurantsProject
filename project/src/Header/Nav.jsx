import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import '@mui/material/colors';
import '../style/header-style/HeaderModule.css';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../style/header-style/style.js';


function Nav(){
    return (
        <ThemeProvider theme = {theme}>
            <nav>
                <PersonOutlineOutlinedIcon className='person-Icon' sx={{ fontSize: 33 }} color="secondary" />
                <ShoppingBasketOutlinedIcon  sx={{ fontSize: 33}} color="secondary" />
            </nav>
        </ThemeProvider>
    )
}

export default Nav;