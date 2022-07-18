import './RestaurantPage.css';
import { useParams} from 'react-router-dom';
import DescriptionRestraurants from '../main/restaurants/restraurantsList/DescriptionRestraurants.js';
import RestaurantHeader from './RestaurantHeader.jsx';
import DishItem from './DishItem.jsx';
import DishList from './DishList';
import Basket from './Basket';


function RestaurantPage(props){
    const {id} = useParams();
    let currentRestaurant = DescriptionRestraurants.find(item => item.id === id);

    let renderCuisine = currentRestaurant.cuisines.map(item =>{
        return (
            <p key={item.cuisine}> {item['cuisine']}</p>
        )
    })

    if (currentRestaurant === undefined) {
        return(
            <div>error</div>
        );
    }
    
    return(
        <main>
            <section className='menuContainer wrapper'>
                <div className='orderList'>
                    <Basket/>
                    <RestaurantHeader img={currentRestaurant.img}
                                deliveryTime = {currentRestaurant.deliveryTime}
                                name = {currentRestaurant.name}
                                delivery = {currentRestaurant.delivery}
                                rate = {currentRestaurant.rate}
                                timeWork = {currentRestaurant.schedule}
                                cuisine = {renderCuisine}
                                />
                </div>
                <DishList cuisines={currentRestaurant.cuisines}/>
            </section>
        </main>
    );
}

export default RestaurantPage;