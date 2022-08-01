import {filterCuisines} from '../../redux/cuisineSlice.js';

function CheckBox({id, name, addOrRemoveCuisine}){
    return(
        <div className="cuisine-item">
            <input type='checkbox' id={id} value={name} onChange={(event) => addOrRemoveCuisine(event.target.value)}/>
            <label htmlFor={id}>{name}</label>
    </div>
    )
}

export default CheckBox;