import './Cuisine.css';
import CheckBox from './CheckBox';

const cuisines = [
    {id: 'asian', name: 'АЗИАТСКАЯ КУХНЯ'},
    {id: 'american', name: 'Американская кухня'},
    {id: 'belarusian', name: 'Белорусская кухня'},
    {id: 'european', name: 'Европейская кухня'},
    {id: 'italian', name: 'Итальянская кухня'},
    {id: 'chinese', name: 'Китайская кухня'},
    {id: 'japanese', name: 'Японская кухня'}
];

function Cuisine(){   
    return(
        <section className="cuisine-list">
            <div style={{position: 'sticky', top: '70px'}}>
                <h2>КУХНИ</h2>
                {cuisines.map(item => {
                    return (
                    <CheckBox {...item}
                            name={item.name.toUpperCase()}
                            key = {item.id}
                            />
                    )
                })}
            </div>
    </section>
    )
   
}

export default Cuisine;