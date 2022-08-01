import descriptionRestraurants from './DescriptionRestraurants.js';
import '../restraurantsList/RestraurantsList.css';
import RestraurantItem from './RestraurantItem.jsx';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import store from '../../../redux';
import { useEffect } from 'react';

function RestraurantsList(props){
    let cuisines = useSelector(state => state.cuisine.cuisines);

    useEffect(filterRestraunts, [cuisines]);
    

    function filterRestraunts() {
        if(cuisines.length != 0) {
            let newRests = descriptionRestraurants.filter(rest => {
                for(let c of cuisines) {
                    for(let cRest of rest['cuisines']) {
                        if(c === cRest['cuisine'].toUpperCase()) {
                            return true;
                         } 
                     }
                 }
                 return false;
             });
            setRests(newRests);
        }
        else {
            setRests(descriptionRestraurants);
        }
    }

    let [rests, setRests] = useState(descriptionRestraurants);

    return(
        <section>
            <div className='RestraurantsList'>
                {rests.map(item => {
                    return(
                        <RestraurantItem id={item.id}
                                        img={item.img}
                                        description={item.description}
                                        name = {item.name}
                                        deliveryTime = {item.deliveryTime}
                                        rate = {item.rate}
                                        delivery = {item.delivery}
                                        key={item.name}
                                        />
                    )            
                })}
            </div>
        </section>
    )
}

export default RestraurantsList;