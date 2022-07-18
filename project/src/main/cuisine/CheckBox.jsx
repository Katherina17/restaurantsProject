import {filterCuisine} from '../../store/cuisineSlice.js';

function CheckBox({dispatch,id, name, event}){
    return(
        <div className="cuisine-item">
            <input type='checkbox' id={id} value={name} onChange={(e, value) => dispatch(filterCuisine(value))}/>
            <label htmlFor={id}>{name}</label>
    </div>
    )
}

export default CheckBox;