import './Registration.css';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useState } from 'react';
import PopUp from '../../../Main/PopUp/PopUp';
import Button from '../../../ui/Button';
import CloseIcon from '@mui/icons-material/Close';

function Registration(){
    let [popupOpened, setPopUpOpened] = useState(false);
    let [activeBtn, setActiveBtn] = useState(true);

    return(
        <>
            {popupOpened && 
                <PopUp removePopUp={() => {setPopUpOpened(false);
                                           }}>
                    <div className='formsContainer'>
                        <div className='closedBtnContainer' ><button id='closedBtn' onClick={() => setPopUpOpened(false)}><CloseIcon/></button></div>
                                <div className='logInOrSignUp'>
                                    <h2 className={activeBtn ? 'activeBtn' : ''} onClick={() => setActiveBtn(true)}>Вход</h2>
                                    <h2 className={activeBtn ? '' : 'activeBtn'} onClick={() => setActiveBtn(false)}>Регистрация</h2>
                                </div>
                                <form className='signUpForm'>
                                    <div className='SingUpContainer' style={{ display: activeBtn ? 'flex' : 'none' }}>
                                        <div className='SingUp'>
                                            <input type={'email'} placeholder={'Почта'} name='email' required autoComplete='on'/>
                                            <input type={"Password"} placeholder={'Пароль'} name='password' required/>
                                        </div>
                                        <Button> <span> Войти </span> </Button>
                                    </div>
                                </form>
                                <form className='registrationForm'>
                                    <div className='logInContainer' style={{display: activeBtn ? 'none' : 'flex' }}>
                                        <div className='logIn'>
                                            <input type={'text'} placeholder={'Имя'} required/>
                                            <input type={'email'} placeholder={'Почта'} required autoComplete='on'/>
                                            <input type={"Password"} placeholder={'Пароль'} required/>
                                            <input type={"Password"} placeholder={'Подтвердить пароль'} required/>
                                        </div>
                                        <Button> <span>Регистрация</span> </Button>
                                    </div>
                                </form>
                    </div>
                </PopUp>
            }
            <PersonOutlineOutlinedIcon className='person-Icon' 
                sx={{ fontSize: 33, marginRight: '10px', cursor: 'pointer'}} 
                color="secondary"
                onClick={() => setPopUpOpened(true)}/>
        </>
    )
}

export default Registration;