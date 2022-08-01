import Button from "../../../ui/Button.jsx"
import "./Filter.css";
import {useDispatch} from 'react-redux';
import {setTime} from '../../../redux/timeSlice';
import { useSelector } from "react-redux";

function Filter(){
    let dispatch = useDispatch();
    let timeState = useSelector(state => state.time.timeState);

    return(
        <div className="filter">
            <Button style={{backgroundColor: timeState ? '' : '#e4aa1eeb', width: 163 + 'px', height: 24 + 'px'}} onClick={() => dispatch(setTime(false))}> Открыты сейчас</Button>
            <Button style={{backgroundColor: timeState ? '#e4aa1eeb' : '', width: 89 + 'px'}} onClick={() => dispatch(setTime(true))}>Все</Button>
        </div>
    )
}

export default Filter;