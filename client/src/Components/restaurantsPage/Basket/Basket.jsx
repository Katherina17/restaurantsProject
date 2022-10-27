import './Basket.css';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../../Header/Nav/CreateTheme';

function Basket(){
    return(
        <ThemeProvider theme={theme}>
            <div className='basketContainer'>
                <div className='Order'>
                    <span> Ваш заказ</span>
                </div>
                <div className='basket'>
                    <span>Ваша корзина пуста</span>
                    <ShoppingBasketOutlinedIcon  sx={{ fontSize: 100, cursor: 'pointer'}} color="secondary" />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Basket;