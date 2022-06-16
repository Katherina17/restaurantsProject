import descriptionRestraurants from './DescriptionRestraurants.jsx';


const renderRestraurants = descriptionRestraurants.map(item => {
    return (
        <div>
            <img src={require(item.img).default} alt={item.name}/>
            <div>
                <span>{item.deliveryTime}</span>
            </div>
            <div>
                <h2>{item.name}</h2>
                <span>{item.description}</span>
                <div>
                    <span>{item.rate}</span>
                    <span>{item.delivery}</span>
                </div>
            </div>
        </div>
    )
});

function RestraurantsList(){
    return(
        <section className='RestraurantsList'>
            {renderRestraurants}
        </section>
    )
}

export default RestraurantsList;