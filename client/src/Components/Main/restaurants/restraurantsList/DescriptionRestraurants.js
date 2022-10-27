import imageSrcMama from '../../../../assets/mamaHuana.jpg';
import imageSrcGarage from '../../../../assets/garage.jpg';
import imageSrcSevenFridays from '../../../../assets/sevenFridays.jpg';
import imageSrcCicava from '../../../../assets/cicava.jpg';
import imageSrcOltre from '../../../../assets/oltre.jpg';
import imageSrcFaSol from '../../../../assets/FaSol.jpg';
import imageSrcWok from '../../../../assets/wok.jpg';
import imageSrcTabo from '../../../../assets/tabo.jpg';
import imageSrcYummy from '../../../../assets/yummy.jpg';
import imageBigSrcMama from '../../../../assets/bigImages/mamaHuana.jpg';
//import dishes

import imageBaoPork from '../../../../assets/dishes/baoPork.jpg';
import imageBaoChicken from '../../../../assets/dishes/baoChicken.jpg';
import imageBowlPoke from '../../../../assets/dishes/bowlPoke.jpg';
import imageChickenGreenSauce from '../../../../assets/dishes/chickenGreenSauce.jpg';
import imageDranikiSalmon from '../../../../assets/dishes/dranikiSalmon.jpg';
import imageFishBurger from '../../../../assets/dishes/fishBurger.jpg';
import imageFunchozaChicken from '../../../../assets/dishes/funchozaChicken.jpg';
import imageGedza from '../../../../assets/dishes/gedza.jpg';
import imageHamburger from '../../../../assets/dishes/hamburger.jpg';
import imageHoneyCake from '../../../../assets/dishes/honeyCake.jpg';
import imageMachanka from '../../../../assets/dishes/machanka.jpg';
import imageMangoFila from '../../../../assets/dishes/mangoFila.jpg';
import imageMurakami from '../../../../assets/dishes/murakami.jpg';
import imageOnionSoup from '../../../../assets/dishes/onionSoup.jpg';
import imagePastaPadThai from '../../../../assets/dishes/pastaPadThai.jpg';
import imagePastaSeafood from '../../../../assets/dishes/pastaSeafood.jpg';
import imagePenne from '../../../../assets/dishes/penne.jpg';
import imagePizza4Cheese from '../../../../assets/dishes/pizza4Cheese.jpg';
import imagePizza5Cheese from '../../../../assets/dishes/pizza5Cheese.jpg';
import imageRiceTiger from '../../../../assets/dishes/riceTiger.jpg';
import imageSaladMozzarella from '../../../../assets/dishes/saladMozzarella.jpg';
import imageSandwichChicken from '../../../../assets/dishes/sandwichChicken.jpg';
import imageSandwichTuna from '../../../../assets/dishes/sandwichTuna.jpg';
import imageSausage from '../../../../assets/dishes/sausage.jpg';
import imageSpringRoll from '../../../../assets/dishes/springRoll.jpg';
import imageTagliata from '../../../../assets/dishes/tagliata.jpg';
import imageTeriyakiBurger from '../../../../assets/dishes/teriyakiBurger.jpg';
import imageAssorti from '../../../../assets/dishes/assorti.jpg'


const descriptionRestraurants = [
    {
        id:"mamaHuana",
        name: 'МАМА ХУАНА',
        description: 'Ресторан, Европейская кухня',
        deliveryTime: '75 мин',
        rate: '4.2',
        delivery: 'Доставка от 10 руб',
        img: imageSrcMama,
        bigImg: imageBigSrcMama,
        scheduleFrom: '12:00',
        scheduleTo: '23:30',
        schedule: 'Время работы с 12:00 до 23:30',
        cuisines: [{cuisine: 'Азиатская кухня',
                dishes: [{
                    category: 'Азиатская кухня',
                    dish: 'Бао с рваной свининой',
                    price: '17 руб',
                    weight: '265г',
                    img: imageBaoPork,
                    dishDescription: 'Азиатская булочка с обжаренными креветками в пряно-остром соусе, пряная морковь, огурцы, маринованный лук, помело и соус на основе майонеза и хрена.'
                },
                {
                    category: 'Азиатская кухня',
                    dish: 'Бао с цыпленком',
                    price: '13 руб',
                    weight: '300г',
                    img: imageBaoChicken,
                    dishDescription: 'Азиатская булочка с цыпленоком темпура, морковь, огурцы, маринованный лук, помело и соус на основе майонеза и хрена.'
                }
            ]   
            },
            {
                cuisine: 'Американская кухня',
                dishes: [
                    {   category: 'Американская кухня',
                        dish: 'Перуанская куриная грудка в зеленом соусе',
                        price: '18 руб',
                        weight: '550г',
                        img: imageChickenGreenSauce,
                        dishDescription: 'Куриная грудка с зеленым соусом с гарниром из обжаренной моркови с цукини.'
                    },
                    {   category: 'Американская кухня',
                        dish: 'Алабами сэндвич с курицей',
                        price: '12.80 руб',
                        weight: '565г',
                        img: imageSandwichChicken,
                        dishDescription: 'Тортилья с куриные филе в панировке, томаты, салат Айсберг, соус Айоли, маринованный огурец, подается с картофелем фри и салатом Клоу слоу.'
                    },

                ]
            },
            {
                cuisine: 'Европейская кухня',
                dishes:[
                    {   category: 'Европейская кухня',
                        dish: 'Поке боул',
                        price: '16 руб',
                        weight: '380г',
                        img: imageBowlPoke,
                        dishDescription: 'Гавайское блюдо - которое состоит из риса, морепродуктов мидии и креветки, медовая морковь, броколли, спаржа, початки кукурузы, копченое яйцо.'
                    },
                    {   category: 'Европейская кухня',
                        dish: 'Французкий луковый суп',
                        price: '6 руб',
                        weight: '310г',
                        img: imageOnionSoup,
                        dishDescription: 'Луковый суп с добавлением пряностей (гвоздика, корица, бадьян), подается с багетом под сыром.'
                    }
                ]
            }]
    },
    {   
        id:'cafeGarage',
        name: 'CAFE GARAGE',
        description: 'Кафе, Белорусская кухня',
        deliveryTime: '35 мин',
        rate: '4.1',
        delivery: 'Доставка от 17 руб',
        img: imageSrcGarage,
        scheduleFrom: '10:00',
        scheduleTo: '22:00', 
        schedule: 'Время работы с 10:00 до 22:00',
        cuisines: [{cuisine: 'Американская кухня',
                dishes: [{
                    category: 'Американская кухня',
                    dish: 'Бургер Терияки',
                    price: '15.40 руб',
                    weight: '300г',
                    img: imageTeriyakiBurger,
                    dishDescription: 'Котлета куриная, булочка, сыр Чеддер, томат, лук красный, майонез, соус Терияки, руккола.'
                }
            ]   
            },
            {
                cuisine: 'Белорусская кухня',
                dishes: [
                    {   category: 'Белорусская кухня',
                        dish: 'Драники с копченым лососем',
                        price: '17.40 руб',
                        weight: '150г',
                        img: imageDranikiSalmon,
                        dishDescription: 'Картофельные драники, лосось горячего копчения, соус творожный.'
                    }
                ]
            },
            {
                cuisine: 'Европейская кухня',
                dishes:[
                    {   category: 'Европейская кухня',
                        dish: 'Тальятта из говядины со свежим салатом',
                        price: '28 руб',
                        weight: '250г',
                        img: imageTagliata,
                        dishDescription: 'Говядина, томат черри, микс салатов, соус Цезарь, масло Базилик, сыр Пармезан.'
                    }
                ]
            },
            {
                cuisine: 'Итальянская кухня',
                dishes:[
                    {   category: 'Итальянская кухня',
                        dish: 'Паста с морепродуктами',
                        price: '16.70 руб',
                        weight: '320г',
                        img: imagePastaSeafood,
                        dishDescription: 'Паста Лингвини, соус Помодоро, сливки, цукини, вино белое, копченый лосось, креветка салатная, сыр Пармезан, чеснок, зелень.'
                    }
                ]
            }
        ]
    },
    {
        id: 'sevenFridays',
        name: '7 Пятниц',
        description: 'Бар, Американская кухня',
        deliveryTime: '75 мин',
        rate: '4',
        delivery: 'Доставка от 10 руб',
        img: imageSrcSevenFridays,
        scheduleFrom: '12:30',
        scheduleTo: '24:30',
        schedule: 'Время работы с 12:30 до 00:30',
        cuisines: [{cuisine: 'Американская кухня',
                dishes: [{
                    category: 'Американская кухня',
                    dish: 'Фиш бургер',
                    price: '18.50 руб',
                    weight: '220г',
                    img: imageFishBurger,
                    dishDescription: 'Две нежные котлеты из филе судака с соусом тар-тар и легким овощным салатом.'
                }
            ]   
            },
            {
                cuisine: 'Европейская кухня',
                dishes: [
                    {   category: 'Европейская кухня',
                        dish: 'Ризотто Tiger',
                        price: '21 руб',
                        weight: '300г',
                        img: imageRiceTiger,
                        dishDescription: 'Ризотто с креветками в сливках с сыром Пармезан.'
                    }
                ]
            },
            {
                cuisine: 'Итальянская кухня',
                dishes:[
                    {   category: 'Итальянская кухня',
                        dish: 'Паста Pad Thai',
                        price: '24 руб',
                        weight: '360г',
                        img: imagePastaPadThai,
                        dishDescription: 'Фетучини с креветкой, ньоками и морским гребешком в соусе pad tai, подаётся с филе апельсина , долькой лайма и зеленью.'
                    }
                ]
            },
            {
                cuisine: 'Японская кухня',
                dishes:[
                    {   category: 'Японская кухня',
                        dish: 'Ролл Mango Fila',
                        price: '19.50 руб',
                        weight: '330г',
                        img: imageSpringRoll,
                        dishDescription: 'Лосось, огурец, сыр, чукка, только, соус манго, рис, нори, имбирь, васаби, соевый соус.'
                    }
                ]
            }
        ]
    },
    {
        id: 'zauzhdyCicava',
        name: 'Заўжды ЦiкаVa',
        description: 'Ресторан, Азиатская кухня',
        deliveryTime: '105 мин',
        rate: '5',
        delivery: 'Доставка от 10 руб',
        img: imageSrcCicava,
        scheduleFrom: '10:00',
        scheduleTo: '20:00', 
        schedule: 'Время работы с 10:00 до 20:00',
        cuisines: [{cuisine: 'Американская кухня',
                dishes: [{
                    category: 'Американская кухня',
                    dish: 'Бургер с говяжьей котлетой',
                    price: '9.99 руб',
                    weight: '420г',
                    img: imageHamburger,
                    dishDescription: 'Подпеченная булочка, котлета из рубленой говядины, соус барбекю, маринованный огурец и свежий помидор, подается с картофелем фри и соусом барбекю.'
                }
            ]   
            },
            {
                cuisine: 'Азиатская кухня',
                dishes: [
                    {   category: 'Азиатская кухня',
                        dish: 'Фунчоза с курицей',
                        price: '9.59 руб',
                        weight: '300г',
                        img: imageFunchozaChicken,
                        dishDescription: 'Пикантное филе птицы, обжаренное с овощами в соевом соусе с рисовой лапшой.'
                    }
                ]
            },
            {
                cuisine: 'Европейская кухня',
                dishes:[
                    {   category: 'Европейская кухня',
                        dish: 'Жареная копченая колбаса',
                        price: '9.59 руб',
                        weight: '410г',
                        img: imageSausage,
                        dishDescription: 'Жареная копченая колбаса с теплыми картофельными дольками, соусом тартар и острым аджичным соусом.'
                    }
                ]
            },
            {
                cuisine: 'Белорусская кухня',
                dishes:[
                    {   category: 'Белорусская кухня',
                        dish: 'Мачанка',
                        price: '9.99 руб',
                        weight: '420г',
                        img: imageMachanka,
                        dishDescription: 'Мачанка с ребрышками и домашней колбасой, подается с блинами.'
                    }
                ]
            }
        ]
    },
    {
        id: 'oltre',
        name: 'Oltre',
        description: 'Ресторан-кафе, Европейская кухня',
        deliveryTime: '75 мин',
        rate: '4.7',
        delivery: 'Доставка от 10 руб',
        img: imageSrcOltre,
        scheduleFrom: '11:00',
        scheduleTo: '20:00', 
        schedule: 'Время работы с 11:00 до 20:00',
        cuisines: [{cuisine: 'Американская кухня',
                dishes: [{
                    category: 'Американская кухня',
                    dish: 'Медовик',
                    price: '7.50 руб',
                    weight: '120г',
                    img: imageHoneyCake,
                    dishDescription: 'Мед, сахар, масло сливочное, желток, мука, сода, пряности'
                }
            ]   
            },
            {
                cuisine: 'Европейская кухня',
                dishes: [
                    {   category: 'Европейская кухня',
                        dish: 'Сэндвич с тунцом',
                        price: '13 руб',
                        weight: '170г',
                        img: imageSandwichTuna,
                        dishDescription: 'Хлеб, тунец, соус, огурцы.'
                    }
                ]
            }
        ]
    },
    {  
        id: 'faSol',
        name: 'ФаСоль',
        description: 'Ресторан, Европейская кухня',
        deliveryTime: '75 мин',
        rate: '4.6',
        delivery: 'Доставка от 10 руб',
        img: imageSrcFaSol,
        scheduleFrom: '12:00',
        scheduleTo: '22:30',
        schedule: 'Время работы с 12:00 до 22:30',
        cuisines: [{cuisine: 'Европейская кухня',
                dishes: [{
                    category: 'Европейская кухня',
                    dish: 'Салат с жареной моцареллой',
                    price: '16 руб',
                    weight: '250г',
                    img: imageSaladMozzarella,
                    dishDescription: 'Кубики жареной моцареллы в хрустящей панировке с листьями салатов Айсберг и Ромэн, рукколой, сладким перцем, грецкими орехом, жареными тыквенными семечками и лёгкой медово-оливковой заправкой.'
                }
            ]   
            },
            {
                cuisine: 'Итальянская кухня',
                dishes: [
                    {   category: 'Итальянская кухня',
                        dish: 'Пенне с жюльеном',
                        price: '13 руб',
                        weight: '350г',
                        img: imagePenne,
                        dishDescription: 'Итальянская паста с куриным филе в сливочном соусе, с жареными грибами и пармезаном.'
                    }
                ]
            }
        ]
    },
    {  
        id: 'wokDragon', 
        name: 'WOK Dragon',
        description: 'Ресторан, Китайская кухня',
        deliveryTime: '75 мин',
        rate: '4.3',
        delivery: 'Доставка от 10 руб',
        img: imageSrcWok,
        scheduleFrom: '10:00',
        scheduleTo: '21:30',  
        schedule: 'Время работы с 10:00 до 21:30',
        cuisines: [{cuisine: 'Итальянская кухня',
                dishes: [{
                    category: 'Итальянская кухня',
                    dish: 'Пицца Четыре сезона',
                    price: '14.50 руб',
                    weight: '550г',
                    img: imagePizza4Cheese,
                    dishDescription: 'Соус, ветчина, колбаса с/к, перец болгарский, маслины, сыр Моцарелла.'
                }
            ]   
            },
            {
                cuisine: 'Китайская кухня',
                dishes: [
                    {   category: 'Китайская кухня',
                        dish: 'Гедза',
                        price: '10 руб',
                        weight: '220г',
                        img: imageGedza,
                        dishDescription: 'Китайские жареные пельмени со свининой и говядиной.'
                    }
                ]
            },
            {
                cuisine: 'Японская кухня',
                dishes:[
                    {   category: 'Японская кухня',
                        dish: 'Спринг Ролл с креветками',
                        price: '12 руб',
                        weight: '220г',
                        img: imageSpringRoll,
                        dishDescription: 'Спринг Ролл с креветками с соусом Чили кисло-сладкий.'
                    }
                ]
            }
        ]
    },
    {   id: 'tabo',
        name: 'Табу',
        description: 'Суши-бар, Японская кухня',
        deliveryTime: '75 мин',
        rate: '4.6',
        delivery: 'Доставка от 10 руб',
        img: imageSrcTabo,
        scheduleFrom: '12:00',
        scheduleTo: '22:30', 
        schedule: 'Время работы с 12:00 до 22:30',
        cuisines: [{cuisine: 'Японская кухня',
                dishes: [{
                    category: 'Японская кухня',
                    dish: 'Сет Мураками',
                    price: '39 руб',
                    weight: '660г',
                    img: imageMurakami,
                    dishDescription: 'Роллы: Магуро Филадельфия 4шт, Окинава 4шт, Лайт Филадельфия 4шт, Бонито авокадо 4шт, Сяке авокадо 4шт, Сяке Филадельфия 4шт. Соевый соус 3шт, васаби 3шт, имбирь 3шт, палочки 3 пары.'
                }
            ]   
                }
        ]
    },
    {
        id: 'ymmY',
        name: 'YummY',
        description: 'Кафе, Японская кухня',
        deliveryTime: '40 мин',
        rate: '3.4',
        delivery: 'Доставка от 12.90 руб',
        img: imageSrcYummy,
        scheduleFrom: '10:00',
        scheduleTo: '22:30',
        schedule: 'Время работы с 10:00 до 22:30',
        cuisines: [{cuisine: 'Итальянская кухня',
                dishes: [{
                    category: 'Итальянская кухня',
                    dish: 'Пицца 5 Сыров 30см',
                    price: '17.90 руб',
                    weight: '530г',
                    img: imagePizza5Cheese,
                    dishDescription: 'Сыр Дор-Блю, сыр Чеддер плавленый, сыр Пармезан, сыр Фету, сыр Моцарелла, тесто, томатная паста.'
                }
            ]   
            },
            {   cuisine: 'Японская кухня',
                dishes: [{
                    category: 'Японская кухня',
                    dish: 'Сет Ассорти',
                    price: '54.90 руб',
                    weight: '1490г',
                    img: imageAssorti,
                    dishDescription: 'Фирменный, Сёгун, Филадельфия Грин, Калифорния, Маки с креветкой спайси, Маки с лососем, Маки с огурцом.'
                }
            ]   
                }
        ]
    }
]

export default descriptionRestraurants;

