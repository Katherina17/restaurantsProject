import './MenuItem.css';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import StarRateIcon from '@mui/icons-material/StarRate';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../header/nav/CreateTheme.js';


function MenuItem(props){
    return (
        <ThemeProvider theme={theme}>
              <div className='container wrapper'>
                    <div className='rest-desc'>
                        <img src={props.img} alt={props.name}/>
                        <div className='textContainer'>
                            <div className='nameRest'>
                                <h2>{props.name}</h2>
                            </div>
                            <div className='deliveryContainer'>
                                <div className='deliveryTime'>
                                    <WatchLaterIcon fontSize='medium' color="primary" style={{marginRight: '0.4' + 'rem'}} />
                                    <p>{props.deliveryTime}</p>
                                </div>
                                <div className='delivery'>
                                    <p>{props.delivery}</p>
                                </div>
                            </div>
                            <div className='timeWork'>
                                <p >{props.timeWork}</p>
                            </div>
                            <div className='rate'>
                                <StarRateIcon color="primary" style={{marginRight: '0.2' + 'rem'}}/>
                                <p style={{marginRight: '0.4' + 'rem'}}>{props.rate}</p>
                            </div>
                        </div>
                    </div>
                    <div className='typeOfCuisine'>
                        {props.cuisine}
                    </div>
                </div> 
        </ThemeProvider>
    )
}

export default MenuItem;


