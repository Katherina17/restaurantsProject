import './RestaurantPage.css';
import { useParams} from 'react-router-dom';
import DescriptionRestraurants from '../Main/restaurants/restraurantsList/DescriptionRestraurants.js';
import RestaurantHeader from '../restaurantsPage/RestaurantHeader/RestaurantHeader';
import DishList from '../restaurantsPage/DishList/DishList';
import Basket from '../restaurantsPage/Basket/Basket';


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