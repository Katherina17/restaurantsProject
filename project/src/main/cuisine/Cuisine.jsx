import './Cuisine.css';
import Button from '../../ui/Button.jsx';
import { useDispatch } from 'react-redux';
import {filterCuisines} from '../../redux/cuisineSlice.js';
import CheckBox from './CheckBox';
import { useState } from 'react';


const cuisines = [
    {id: 'asian', name: 'АЗИАТСКАЯ КУХНЯ'},
    {id: 'american', name: 'Американская кухня'},
    {id: 'belarusian', name: 'Белорусская кухня'},
    {id: 'european', name: 'Европейская кухня'},
    {id: 'italian', name: 'Итальянская кухня'},
    {id: 'chinese', name: 'Китайская кухня'},
    {id: 'japanese', name: 'Японская кухня'}
];

function Cuisine(){
    let [currentCuisines, setCuisines] = useState([]);
    let dispatch = useDispatch();

    function addOrRemoveCuisine(cuisine) {
        if(currentCuisines.find(c => c === cuisine)){
            setCuisines(currentCuisines.filter(c => c !== cuisine))
        } else {
            setCuisines(currentCuisines.concat(cuisine))
        }
    }

    return(
        <section className="cuisine-list">
            <div style={{position: 'sticky', top: '70' + 'px'}}>
                <h2>КУХНИ</h2>
                {cuisines.map(item => {
                    return (
                    <CheckBox {...item}
                            name={item.name.toUpperCase()}
                            key = {item.id}
                            addOrRemoveCuisine={addOrRemoveCuisine}/>
                    )
                })}
                <div id='AcceptBtn'>
                    <Button style={{height: 32 + 'px', width: 196 + 'px',}} onClick={() => dispatch(filterCuisines(currentCuisines))}>ПРИМЕНИТЬ</Button>
                </div>
            </div>
    </section>
    )
   
}

export default Cuisine;