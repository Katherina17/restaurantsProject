import Button from "../../../ui/Button.jsx"
import "./Filter.css";
import {useDispatch} from 'react-redux';
import {setTime} from '../../../../redux/timeSlice';
import { changePopUpState } from "../../../../redux/popUpSlice.js";
import { useSelector } from "react-redux";
import {useEffect, useState} from 'react';
import PopUp from '../../PopUp/PopUp';
import Cuisine from "../../Cuisine/Cuisine.jsx";

function Filter(){
    let dispatch = useDispatch();
    let timeState = useSelector(state => state.time.timeState);
    let statePopUp = useSelector(state => state.popUp.popUpState);
    let [cuisineState, setCuisineState] = useState(false);
    useEffect(isActive, [statePopUp])

    function isActive(){
        if(statePopUp){
            document.body.style.overflow = 'hidden';  
        } else {
            document.body.style.overflow = 'visible'; 
        }
    }

    return(
        <div className="filter">
            <PopUp changeStateCuisine = {setCuisineState}>
                <Cuisine/>
            </PopUp>
            <Button className='mobileCuisines' style={{backgroundColor: cuisineState ? '#e4aa1eeb' : '', width: 163 + 'px', height: 24 + 'px'}}
                onClick={() => {
                    dispatch(changePopUpState(!statePopUp));
                    setCuisineState(!cuisineState)
                    }}>Кухни</Button>
            <Button style={{backgroundColor: timeState ? '' : '#e4aa1eeb', width: 163 + 'px', height: 24 + 'px', marginRight: '18px'}} onClick={() => dispatch(setTime(false))}> Открыты сейчас</Button>
            <Button style={{backgroundColor: timeState ? '#e4aa1eeb' : '', width: 89 + 'px'}} onClick={() => dispatch(setTime(true))}>Все</Button>
        </div>
    )
}

export default Filter;