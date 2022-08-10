import './PopUp.css';
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { changePopUpState } from '../../redux/popUpSlice';


function PopUp(props){
    let setPopUp = useSelector(state => state.popUp.popUpState);
    let dispatch = useDispatch();

    function removePopUp(){
        if(setPopUp){
            dispatch(changePopUpState(false));
        } 
    }

    function onEmptyAreaClick(e) {
        if(e.target.className === "popUpContainer") removePopUp();
    }

    return(
        <div className="popUpContainer" style={{display: setPopUp ? 'flex' : 'none'}} onClick={onEmptyAreaClick}>
            <div className="modal-window">
                <div>
                    <CloseIcon onClick={() => removePopUp()} sx={{ fontSize: 34, cursor: 'pointer'}}/>
                </div>
                {props.innerRender({removePopUp})}
            </div>
        </div>
    )
}

export default PopUp;