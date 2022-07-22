import {filterCuisines} from '../../redux/cuisineSlice.js';

function CheckBox({dispatch,id, name}){
    return(
        <div className="cuisine-item">
            <input type='checkbox' id={id} value={name} onChange={(event) => dispatch(filterCuisines(event.target.value))}/>
            <label htmlFor={id}>{name}</label>
    </div>
    )
}

export default CheckBox;