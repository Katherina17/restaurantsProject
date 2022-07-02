import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import '@mui/material/colors';
import {ThemeProvider} from '@mui/material/styles';
import theme from './CreateTheme.js';


function Nav(){
    return (
        <ThemeProvider theme = {theme}>
            <nav>
                <PersonOutlineOutlinedIcon className='person-Icon' sx={{ fontSize: 33, marginRight: '10px', cursor: 'pointer'}} color="secondary" />
                <ShoppingBasketOutlinedIcon  sx={{ fontSize: 33, cursor: 'pointer'}} color="secondary" />
            </nav>
        </ThemeProvider>
    )
}

export default Nav;