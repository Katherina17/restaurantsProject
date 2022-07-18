import descriptionRestraurants from './DescriptionRestraurants.js';
import '../restraurantsList/RestraurantsList.css';
import RestraurantItem from './RestraurantItem.jsx';
import { Link } from "react-router-dom";

const renderRestraurants = (rests) => rests.map(item => {
    return(
        <RestraurantItem id={item.id}
                        img={item.img}
                        description={item.description}
                        name = {item.name}
                        deliveryTime = {item.deliveryTime}
                        rate = {item.rate}
                        delivery = {item.delivery}
                        key={item.name}
                        cuisine = {item.cuisines.map(item => {
                           return item['cuisine'];
                        })}/>
    )            
})

function RestraurantsList(props){
    let rests = descriptionRestraurants;
    // let cousines = ["Белорусская кухня"];

    // rests = rests.filter(rest => {
    //     for(let c of cousines) {
    //         for(let cRest of rest['cuisines']) {
    //             if(c === cRest['cuisine']) {
    //                 return true;
    //             } 
    //         }
    //     }
    //     return false;
    // });
    

    return(
        <section>
            <div className='RestraurantsList'>
             {renderRestraurants(rests)}
            </div>
        </section>
    )
}

export default RestraurantsList;