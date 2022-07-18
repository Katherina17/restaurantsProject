import './RestaurantHeader.css';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import StarRateIcon from '@mui/icons-material/StarRate';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../header/nav/CreateTheme.js';


function RestaurantHeader(props){
    return (
        <ThemeProvider theme={theme}>
              <div className='container'>
                    <div className='rest-desc'>
                        <img src={props.img} alt={props.name}/>
                        <div className='textContainer'>
                            <div className='nameRest'>
                                <h2>{props.name}</h2>
                            </div>
                            <div className='deliveryContainer'>
                                <div className='deliveryTime'>
                                    <WatchLaterIcon fontSize='medium' color="primary" style={{marginRight: '0.4' + 'rem'}} />
                                    <span>{props.deliveryTime}</span>
                                </div>
                                <div className='delivery'>
                                    <span>{props.delivery}</span>
                                </div>
                            </div>
                            <div className='timeWork'>
                                <span >{props.timeWork}</span>
                            </div>
                            <div className='rating'>
                                <StarRateIcon color="primary" style={{marginRight: '0.2' + 'rem'}}/>
                                <span style={{marginRight: '0.4' + 'rem'}}>{props.rate}</span>
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

export default RestaurantHeader;


