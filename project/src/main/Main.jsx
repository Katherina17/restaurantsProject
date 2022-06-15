import { width } from '@mui/system';
import Cuisine from './cuisine/Cuisine.jsx';
import './Main.css';
import Filter from './restaurants/filter/Filter.jsx';

function Main(){
    return(
        <main>
            <div className='wrapper mainContainer'>
                <Cuisine/>
                <div style={{width: 100 + '%'}}>
                    <Filter/>
                </div>
            </div>
        </main>
    )
}

export default Main;