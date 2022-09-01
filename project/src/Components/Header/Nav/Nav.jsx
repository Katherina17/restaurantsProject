import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import '@mui/material/colors';
import {ThemeProvider} from '@mui/material/styles';
import theme from './CreateTheme.js';
import Registration from './Registration/Registration.jsx';


function Nav(){
    return (
        <ThemeProvider theme = {theme}>
            <nav>
                <Registration/>
                <ShoppingBasketOutlinedIcon  sx={{ fontSize: 33, cursor: 'pointer'}} color="secondary" />
            </nav>
        </ThemeProvider>
    )
}

export default Nav;