import './MenuPage.css';
import { useParams} from 'react-router-dom';
import DescriptionRestraurants from '../main/restaurants/restraurantsList/DescriptionRestraurants.js';
import MenuItem from './MenuItem.jsx';
import DishItem from './DishItem';

function MenuPage(props){
    const {id} = useParams();
    let currentRestaurant = DescriptionRestraurants.find(item => item.id === id);

    let renderCuisine = currentRestaurant.cuisines.map(item =>{
        return (
            <p> {item['cuisine']}</p>
        )
    })

    let renderDish = currentRestaurant.cuisines.map( item => {
       
      
    })
   
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
                                timeWork = {currentRestaurant.schedule}
                                cuisine = {renderCuisine}
                                />
                <DishItem dish = {renderDish}/>   
                </div>
            </section>
        </main>
    );
}

export default MenuPage;