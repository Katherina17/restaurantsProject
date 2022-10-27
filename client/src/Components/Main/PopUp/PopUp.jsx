import './PopUp.css';
import { useEffect, useState } from 'react';


function PopUp({children, removePopUp, ...props}){
    function onEmptyAreaClick(e) {
        if(e.target.className === "popUpContainer" || e.target.className === "popUpContainer active" ) removePopUp();
    }

    let[isActive, setActive] = useState(false)

    useEffect(() => {
        document.body.style.overflow = "hidden";
        setActive(true)
        return () => {
            document.body.style.overflow = "visible";
            setActive(false)
        }
    }, [])

    return(
        <div className={ isActive ? 'popUpContainer active' : 'popUpContainer'}
            onClick={onEmptyAreaClick}>
                {children}
        </div>
    )
}

export default PopUp;