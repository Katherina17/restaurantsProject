import descriptionRestraurants from './DescriptionRestraurants.js';
import '../restraurantsList/RestraurantsList.css';
import RestraurantItem from './RestraurantItem.jsx';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

function filterByTime(rest, curHours, curMinutes) {
    let timeFrom = rest.scheduleFrom.split(':');
    let timeFromHours = Number(timeFrom[0]);
    let timeFromMin = Number(timeFrom[1]);

    let timeTo = rest.scheduleTo.split(':');
    let timeToHours = Number(timeTo[0]);
    let timeToMin = Number(timeTo[1]);

    let isOverStartTime = false;

    if(curHours > timeFromHours){
        isOverStartTime =  true;
    } else if(curHours === timeFromHours){
        if(curMinutes >= timeFromMin){
            isOverStartTime =  true;
        }
    }

    let isUnderFinishTime = false;

    if (curHours < timeToHours){
        isUnderFinishTime = true;
    } else if(curHours === timeToHours){
        if(curMinutes <= timeToMin){
            isUnderFinishTime = true;
        }
    }

    return isOverStartTime && isUnderFinishTime;

}

function RestraurantsList(props){
    let cuisines = useSelector(state => state.cuisine.cuisines);

    useEffect(filterRestraunts, [cuisines]);
    

    function filterRestraunts() {
        if(cuisines.length !== 0) {
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

    let timeState = useSelector(state => state.time.timeState);

    function filterRestrauntsByTime(){
        if(timeState === false){
            let date = new Date();
            let currentHours = date.getUTCHours()+ 3;
            currentHours = (currentHours < 6) ? currentHours + 24 : currentHours;
            let currentMins = date.getUTCMinutes();
            let newRest = descriptionRestraurants.filter(item => filterByTime(item, currentHours, currentMins));
            setRests(newRest)
            }
             else {
                setRests(descriptionRestraurants)
            }
    }

    useEffect(filterRestrauntsByTime, [timeState])


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