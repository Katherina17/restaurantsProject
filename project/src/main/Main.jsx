import Cuisine from './cuisine/Cuisine.jsx';
import './Main.css';
import Filter from './restaurants/filter/Filter.jsx';
import RestraurantsList from './restaurants/restraurantsList/RestraurantsList.jsx';
import Paginations from './pagination/Pagination.jsx';
import PopUp from './popUp/PopUp.jsx';



function Main(){
    return(
        <main className='mainHomePage'>
            <PopUp innerRender={(props) => <Cuisine {...props}/>}/>
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