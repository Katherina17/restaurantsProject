import './Registration.css';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { changePopUpState } from '../../../../redux/popUpSlice';
import { useEffect } from 'react';
import PopUp from '../../../Main/PopUp/PopUp';

function Registration(){
    let statePopUp = useSelector(state => state.popUp.popUpState);
    let dispatch = useDispatch();

    return(
        <>
            <PopUp>
                <form>
                    <input type={'email'}/>

                </form>
            </PopUp>
            <PersonOutlineOutlinedIcon className='person-Icon' sx={{ fontSize: 33, marginRight: '10px', cursor: 'pointer'}} color="secondary" onClick={() => dispatch(changePopUpState(!statePopUp))}/>
        </>
    )
}

export default Registration;