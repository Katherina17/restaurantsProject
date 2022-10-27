import Button from "../../../ui/Button.jsx"
import "./Filter.css";
import {useDispatch} from 'react-redux';
import {setTime} from '../../../../redux/timeSlice';
import { useSelector } from "react-redux";
import { useState} from 'react';
import PopUp from '../../PopUp/PopUp';
import Cuisine from "../../Cuisine/Cuisine.jsx";

function Filter(){
    let dispatch = useDispatch();
    let timeState = useSelector(state => state.time.timeState);
    let [popupOpened, setPopUpOpened] = useState(false);

    return(
        <div className="filter">
            {popupOpened && 
                <PopUp removePopUp={() => setPopUpOpened(false)}>
                    <div id="cuisine-Modal-Window">
                        <Cuisine/>
                    </div>
                </PopUp>
            }
            <Button className='mobileCuisines' 
                    style={{backgroundColor: popupOpened ? '#e4aa1eeb' : '', width: 163 + 'px', height: 24 + 'px'}}
                    onClick={() => {
                        setPopUpOpened(true)
                    }}>
                Кухни
            </Button>
            <Button style={{backgroundColor: timeState ? '' : '#e4aa1eeb', width: 163 + 'px', height: 24 + 'px', marginRight: '18px'}} onClick={() => dispatch(setTime(false))}> Открыты сейчас</Button>
            <Button style={{backgroundColor: timeState ? '#e4aa1eeb' : '', width: 89 + 'px'}} onClick={() => dispatch(setTime(true))}>Все</Button>
        </div>
    )
}

export default Filter;