const descriptionRestraurants = [
    {
        name: 'МАМА ХУАНА',
        description: 'Ресторан, Европейская кухня',
        deliveryTime: '75 мин',
        rate: '4.2',
        delivery: 'Доставка от 10 руб',
        img: require('../../../assets/mamaHuana.jpg').default
    },
    {
        name: 'CAFE GARAGE',
        description: 'Кафе, Белорусская кухня',
        deliveryTime: '35 мин',
        rate: '4.1',
        delivery: 'Доставка от 17 руб',
        img: require('../../../assets/garage.jpg').default
    },
    {
        name: '7 Пятниц',
        description: 'Бар, Американская кухня',
        deliveryTime: '75 мин',
        rate: '4',
        delivery: 'Доставка от 10 руб',
        img: require('../../../assets/sevenFridays.jpg').default
    },
    {
        name: 'Заўжды ЦiкаVa',
        description: 'Ресторан, Азиатская кухня',
        deliveryTime: '105 мин',
        rate: '5',
        delivery: 'Доставка от 10 руб',
        img: require('../../../assets/cicava.jpg').default
    },
    {
        name: 'Oltre',
        description: 'Ресторан-кафе, Европейская кухня',
        deliveryTime: '75 мин',
        rate: '4.7',
        delivery: 'Доставка от 10 руб',
        img: require('../../../assets/oltre.jpg').default
    },
    {
        name: 'ФаСоль',
        description: 'Ресторан, Европейская кухня',
        deliveryTime: '75 мин',
        rate: '4.6',
        delivery: 'Доставка от 10 руб',
        img: require('../../../assets/FaSol.jpg').default
    },
    {
        name: 'WOK Dragon',
        description: 'Ресторан, Китайская кухня',
        deliveryTime: '75 мин',
        rate: '4.3',
        delivery: 'Доставка от 10 руб',
        img: require('../../../assets/wok.jpg').default
    },
    {
        name: 'Табу',
        description: 'Суши-бар, Японская кухня',
        deliveryTime: '75 мин',
        rate: '4.6',
        delivery: 'Доставка от 10 руб',
        img: require('../../../assets/tabo.jpg').default
    },
    {
        name: 'YummY',
        description: 'Кафе, Японская кухня',
        deliveryTime: '40 мин',
        rate: '3.4',
        delivery: 'Доставка от 12.90 руб',
        img: require('../../../assets/yummy.jpg').default
    }
]

/*descriptionRestraurants.sort(function(a,b){
    let nameA = a.name.toLowelCase();
    let nameB = b.name.toLowelCase();
    if(nameA > nameB){
        return -1;
    } else if(nameB > nameA){
        return 1;
    } else {
        return 0;
    }
})*/

export default descriptionRestraurants;

