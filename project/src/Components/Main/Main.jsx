import Cuisine from './Cuisine/Cuisine';
import './Main.css';
import Filter from './restaurants/Filter/Filter.jsx';
import RestraurantsList from './restaurants/restraurantsList/RestaurantList/RestraurantsList.jsx';
import Paginations from './Pagination/Pagination.jsx';

function Main(){
    return(
        <main className='mainHomePage'>
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