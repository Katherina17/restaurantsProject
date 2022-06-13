import './Cuisine.css';
import Button from '../../ui/Button.jsx';

const cuisines = [
    {id: 'asian', name: 'АЗИАТСКАЯ КУХНЯ'},
    {id: 'american', name: 'Американская кухня'},
    {id: 'belarusian', name: 'Белорусская кухня'},
    {id: 'vegetarian', name: 'Вегетерианская кухня'},
    {id: 'european', name: 'Европейская кухня'},
    {id: 'italian', name: 'Итальянская кухня'},
    {id: 'chinese', name: 'Китайская кухня'},
    {id: 'japanese', name: 'Японская кухня'}
];

const renderCuisines = cuisines.map(item => {
    return (
        <div className="cuisine-item">
            <input type='checkbox' id={item.id}/>
            <label for={item.id}>{item.name.toUpperCase()}</label>
        </div>
    )
});

function Cuisine(props){
    return(
        <section className="cuisine-list">
        <h2>КУХНИ</h2>
        {renderCuisines}
        <Button>Применить</Button>
    </section>
    )
   
}

export default Cuisine;