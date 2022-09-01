import './PopUp.css';
import { useSelector, useDispatch } from 'react-redux';
import { changePopUpState } from '../../../redux/popUpSlice';


function PopUp({children, ...props}){
    let setPopUp = useSelector(state => state.popUp.popUpState);
    let dispatch = useDispatch();

    function removePopUp(){
        if(setPopUp){
            dispatch(changePopUpState(false));
            props.changeStateCuisine(false)
        } 
    }

    function onEmptyAreaClick(e) {
        if(e.target.className === "popUpContainer") removePopUp();
    }

    return(
        <div className="popUpContainer" style={{display: setPopUp ? 'flex' : 'none'}} onClick={onEmptyAreaClick}>
            <div className="modal-window">
                {children}
            </div>
        </div>
    )
}

export default PopUp;