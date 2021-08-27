import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'
import {React} from 'react'
import {getProductsFromApi} from "../../GetDataFromApi/GetDataFromApi";


function ShoppingList({ cart, updateCart }) {
    const [activeCategory, setActiveCategory] = useState('')
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    class ProductsList extends React.Component {
        constructor() {
            super();
            this.state = {
                isLoading: false,
                productsListApi: [],
                search: '',
            };
        }

        /**
         * C'est dans cette fonction que ce fait l'appel à l'API
         */
        componentDidMount() {
            this.setState({ isLoading: true }); // Lancemenent du chargement
            getProductsFromApi().then((data) => {
                this.setState({
                    productsListApi: data,
                    isLoading: false, // Arrêt du chargement
                });
            });
        }
        render (){
            return (
                <div className='lmg-shopping-list'>

                    <Categories
                        categories={categories}
                        setActiveCategory={setActiveCategory}
                        activeCategory={activeCategory}
                    />


                    <ul className='lmg-plant-list'>
                        {productsListApi.map(({ id, name, price, photo, category }) =>
                            !activeCategory || activeCategory === category ?
                                null
                                :
                                <div key={id}>
                                    <PlantItem
                                        photo={photo}
                                        name={name}
                                        price={price}
                                    />
                                    <button onClick={() => addToCart(name, price)}>Ajouter</button>
                                </div>
                        )}
                    </ul>
                </div>
            )
        }}}

export default ShoppingList
