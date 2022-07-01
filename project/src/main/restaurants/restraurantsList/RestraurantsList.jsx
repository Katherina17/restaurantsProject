import descriptionRestraurants from './DescriptionRestraurants.js';
import '../restraurantsList/RestraurantsList.css';
import RestraurantItem from './RestraurantItem.jsx';
import { Link } from "react-router-dom";


const renderRestraurants = descriptionRestraurants.map(item => {
    return(
        <RestraurantItem id={item.id}
                        img={item.img}
                        description={item.description}
                        name = {item.name}
                        deliveryTime = {item.deliveryTime}
                        rate = {item.rate}
                        delivery = {item.delivery}
                        key={item.name}/>
    )            
})


function RestraurantsList(props){
    return(
        <section>
            <div className='RestraurantsList'>
             {renderRestraurants}
            </div>
        </section>
    )
}

export default RestraurantsList;