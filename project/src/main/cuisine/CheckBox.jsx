import { useDispatch, useSelector } from "react-redux";
import { filterCuisines } from "../../redux/cuisineSlice";
import { useState } from "react";


function CheckBox({id, name}){
    let dispatch = useDispatch();
    return(
        <div className="cuisine-item">
            <input type='checkbox' id={id} value={name} onChange={(event) => {
                dispatch(filterCuisines(event.target.value));
                }}/>
            <label htmlFor={id}>{name}</label>
    </div>
    )
}

export default CheckBox;