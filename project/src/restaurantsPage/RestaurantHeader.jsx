import './RestaurantHeader.css';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import StarRateIcon from '@mui/icons-material/StarRate';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../header/nav/CreateTheme.js';
import {useSelector, useDispatch} from 'react-redux';
import { changeDishState } from '../redux/dishSlice';
import { style } from '@mui/system';
import { useState } from 'react';

function RestaurantHeader(props){
    let dispatch = useDispatch();
    let stateDish = useSelector(state => state.dishes.dishState);
    let [active, setActive] = useState(-1);

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
                        {props.cuisines.map((item, i) => {
                            return(
                                <p className={active == i ? 'active' : ''} onClick = {(event) => {dispatch(changeDishState(event.target.innerText)); setActive(i)}} key={item.cuisine}>{item['cuisine']} </p>
                            );
                        })}
                    </div>
                </div> 
        </ThemeProvider>
    )
}

export default RestaurantHeader;


