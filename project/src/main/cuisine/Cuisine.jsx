import './Cuisine.css';
import Button from '../../ui/Button.jsx';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {filterCuisines} from '../../redux/cuisineSlice.js';
import CheckBox from './CheckBox';
import {filterRests} from '../../redux/filterRestsSlice';


const cuisines = [
    {id: 'asian', name: 'АЗИАТСКАЯ КУХНЯ'},
    {id: 'american', name: 'Американская кухня'},
    {id: 'belarusian', name: 'Белорусская кухня'},
    {id: 'vegetarian', name: 'Вегетерианская кухня'},
    {id: 'european', name: 'Европейская кухня'},
    {id: 'italian', name: 'Итальянская кухня'},
    {id: 'chinese', name: 'Китайская кухня'},
    {id: 'japanese', name: 'Японская кухня'}
];

const renderCuisines = () => cuisines.map(item => {
 const cuisineItem = useSelector(state => state.cuisine.cuisines);
 const dispatch = useDispatch();

    return (
    <CheckBox {...item}
              name={item.name.toUpperCase()}
              key = {item.id}
              dispatch = {dispatch}/>
    )
});

function Cuisine(){
    const dispatch = useDispatch();
    return(
        <section className="cuisine-list">
            <div style={{position: 'sticky', top: '70' + 'px'}}>
                <h2>КУХНИ</h2>
                {renderCuisines()}
                <div id='AcceptBtn'>
                    <Button style={{height: 32 + 'px', width: 196 + 'px',}} onClick={() => dispatch(filterRests())} >ПРИМЕНИТЬ</Button>
                </div>
            </div>
    </section>
    )
   
}

export default Cuisine;