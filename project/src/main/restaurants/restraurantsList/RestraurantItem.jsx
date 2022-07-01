import DescriptionRestraurants from './DescriptionRestraurants.js';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import StarRateIcon from '@mui/icons-material/StarRate';
import {ThemeProvider} from '@mui/material/styles';
import {Link, useParams} from "react-router-dom";
import theme from '../../../header/nav/CreateTheme.js';
import './RestraurantItem.css';


const RestraurantItem = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <Link to={`/restaurant/${props.id}`}>
                <div className='RestraurantsItem'>
                    <div>
                        <img src={props.img} alt={props.name}/>
                    </div>
                        <div className='DeliveryTime'>
                            <div>
                                <WatchLaterIcon fontSize='medium' color="primary" style={{marginRight: '0.4' + 'rem'}} />
                                <p>{props.deliveryTime}</p>
                            </div>
                        </div>
                    <div className='TextDesctiption'>
                        <h2>{props.name}</h2>
                        <p id="description">{props.description}</p>
                        <div className='RateDelivery'>
                            <div className='Rate'>
                                <StarRateIcon color="primary" style={{marginRight: '0.2' + 'rem'}}/>
                                <p style={{marginRight: '0.4' + 'rem'}}>{props.rate}</p>
                            </div>
                            <p>{props.delivery}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </ThemeProvider>
    )
};

export default RestraurantItem;