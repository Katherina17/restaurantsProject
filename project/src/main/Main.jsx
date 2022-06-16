import { width } from '@mui/system';
import Cuisine from './cuisine/Cuisine.jsx';
import './Main.css';
import Filter from './restaurants/filter/Filter.jsx';
import RestraurantsList from './restaurants/restraurantsList/RestraurantsList.jsx';

function Main(){
    return(
        <main>
            <div className='wrapper mainContainer'>
                <Cuisine/>
                <div style={{width: 100 + '%'}}>
                    <Filter/>
                    <RestraurantsList/>
                </div>
            </div>
        </main>
    )
}

export default Main;