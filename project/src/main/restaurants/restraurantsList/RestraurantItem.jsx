import DescriptionRestraurants from './DescriptionRestraurants.js';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import StarRateIcon from '@mui/icons-material/StarRate';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../../../header/nav/CreateTheme.js';
import './RestraurantItem.css';

const RestraurantItem = DescriptionRestraurants.map(item => {
    return (
        <ThemeProvider theme={theme}>
        <div className='RestraurantsItem'>
            <div>
                <img src={item.img} alt={item.name}/>
            </div>
                <div className='DeliveryTime'>
                    <div>
                        <WatchLaterIcon fontSize='medium' color="primary" style={{marginRight: '0.4' + 'rem'}} />
                        <p>{item.deliveryTime}</p>
                    </div>
                </div>
            <div className='TextDesctiption'>
                <h2>{item.name}</h2>
                <p id="description">{item.description}</p>
                <div className='RateDelivery'>
                    <div className='Rate'>
                        <StarRateIcon color="primary" style={{marginRight: '0.2' + 'rem'}}/>
                        <p style={{marginRight: '0.4' + 'rem'}}>{item.rate}</p>
                    </div>
                    <p>{item.delivery}</p>
                </div>
            </div>
        </div>
        </ThemeProvider>
    )
});

export default RestraurantItem;