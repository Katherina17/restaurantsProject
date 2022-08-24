import './RestaurantPage.css';
import { useParams} from 'react-router-dom';
import DescriptionRestraurants from '../main/restaurants/restraurantsList/DescriptionRestraurants.js';
import RestaurantHeader from './RestaurantHeader.jsx';
import DishList from './DishList';
import Basket from './Basket';


function RestaurantPage(props){
    const {id} = useParams();
    let currentRestaurant = DescriptionRestraurants.find(item => item.id === id);

    if (currentRestaurant === undefined) {
        return(
            <div>error</div>
        );
    }
    
    return(
        <main className='mainRestPage'>
            <section className='wrapper'>
                <div className = 'menuContainer'>
                <div className='orderList'>
                        <RestaurantHeader img={currentRestaurant.img}
                                    deliveryTime = {currentRestaurant.deliveryTime}
                                    name = {currentRestaurant.name}
                                    delivery = {currentRestaurant.delivery}
                                    rate = {currentRestaurant.rate}
                                    timeWork = {currentRestaurant.schedule}
                                    cuisines = {currentRestaurant.cuisines}
                                    />
                        <DishList cuisines={currentRestaurant.cuisines}/>
                    </div>
                    <Basket/>
                </div>
            </section>
        </main>
    );
}

export default RestaurantPage;