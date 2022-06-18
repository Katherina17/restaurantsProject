import descriptionRestraurants from './DescriptionRestraurants.js';
import '../restraurantsList/RestraurantsList.css';
import RestraurantItem from './RestraurantItem.jsx'; 




function RestraurantsList(){
    return(
        <section>
            <div className='RestraurantsList'>
                {RestraurantItem}
            </div>
        </section>
    )
}

export default RestraurantsList;