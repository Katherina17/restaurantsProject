import DishItem from "./DishItem";
import './DishList.css';
import { useSelector} from "react-redux";
import { useState } from "react";

function DishList(props){
    let dishState = useSelector(state => state.dishes.dishState);
    
    return(
        <div className="dishList">
              {props.cuisines.map(item => {
                if(dishState === item.cuisine)
                return item.dishes.map(dish => {
                    return(
                        <DishItem dish={dish} key={dish.dish}/>
                    )
                })
            })}
        </div>
    )
}

export default DishList;