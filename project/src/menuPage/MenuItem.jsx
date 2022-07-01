import './MenuPage.css';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import StarRateIcon from '@mui/icons-material/StarRate';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../header/nav/CreateTheme.js';


function MenuItem(props){
    return (
        <ThemeProvider theme={theme}>
               
        </ThemeProvider>
    )
}

export default MenuItem;


