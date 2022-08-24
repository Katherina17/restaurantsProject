import './DishItem.css';
import Button from '../ui/Button.jsx';

function DishItem(props){
    let dish = props.dish;
    return(
        <div className='dishContainer'>
            <div className='dishDesc'>
                <div className='imgDish'>
                    <img src={dish.img} alt = {dish.dish}/>
                </div>
                <div className='textDish'>
                    <h3>{dish.dish}</h3>
                    <span>{dish.weight}</span>
                </div>
                <div className='orderDish'>
                        <span>{dish.price}</span>
                        <Button>В корзину</Button>
                    </div>
            </div>
        </div>
    )
}

export default DishItem;