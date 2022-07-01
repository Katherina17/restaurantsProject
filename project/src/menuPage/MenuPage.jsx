import Header from '../header/Header.jsx';
import './MenuPage.css';
import { useParams} from 'react-router-dom';
import DescriptionRestraurants from '../main/restaurants/restraurantsList/DescriptionRestraurants.js';
import MenuItem from './MenuItem.jsx';



function MenuPage(props){
    const {id} = useParams();
    let currentRestaurant = DescriptionRestraurants.find(item => item.id === id);
   
    if (currentRestaurant === undefined) {
        return(
            <div>error</div>
        );
    }
    
    return(
        <main>
            <section>
                <div>
                    <MenuItem img={currentRestaurant.img}
                                deliveryTime = {currentRestaurant.deliveryTime}
                                name = {currentRestaurant.name}
                                delivery = {currentRestaurant.delivery}
                                rate = {currentRestaurant.rate}
                                />
                </div>
            </section>
        </main>
    );
}

export default MenuPage;