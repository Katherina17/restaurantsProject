import DishItem from "./DishItem";
import './DishList.css';

let renderDishList = (cuisines) => {
    return cuisines.map(item => {
        return item.dishes.map( dish => {
             return(
                 <DishItem dish={dish} key={dish.dish}></DishItem>
             )
         })
         
     })
} 

function DishList(props){
    return(
        <div className="dishList">
              {renderDishList(props.cuisines)}
        </div>
    )
}

export default DishList;