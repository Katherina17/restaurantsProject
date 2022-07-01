import Cuisine from './cuisine/Cuisine.jsx';
import './Main.css';
import Filter from './restaurants/filter/Filter.jsx';
import RestraurantsList from './restaurants/restraurantsList/RestraurantsList.jsx';
import Paginations from './pagination/Pagination.jsx';
import descriptionRestraurants from './restaurants/restraurantsList/DescriptionRestraurants.js';


function Main(){
    return(
        <main>
            <div className='wrapper mainContainer'>
                <Cuisine/>
                <div style={{width: 100 + '%'}}>
                    <Filter/>
                    <RestraurantsList/>
                    <Paginations/>
                </div>
            </div>
        </main>
    )
}

export default Main;