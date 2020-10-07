import React from 'react';
import axios from 'axios';
import CardsList from '../components/CardsList';
import DetailsCard from '../components/DetailsCard';

import {useSelector, useDispatch} from 'react-redux';
import {fetchPokemons, changePage, setSinglePokemon} from '../redux/actions/pokemons';

function Pokedex() {
    
    const dispatch = useDispatch();

    const pokemons = useSelector(({pokemons}) => pokemons.pokemons)
    const singlePokemon = useSelector(({pokemons}) => pokemons.singlePokemon)
    const prevPage = useSelector(({pokemons}) => pokemons.prevPage)
    const nextPage = useSelector(({pokemons}) => pokemons.nextPage)

    React.useEffect(() => {
        dispatch(fetchPokemons());
    }, []);

    const onChangeCurrentPage = React.useCallback((page) => {
        dispatch(changePage(page));
    }, []);

    const onSelectSinglePokemon = React.useCallback((pokemon) => {
        dispatch(setSinglePokemon(pokemon));
    }, []);

    return (
        <div className="pokedex">
            <div className="wrapper">
                <div className="pokedex-content">
                    <div className="title">
                        <h1>Pokedex</h1>
                    </div>
                    <CardsList
                        items={pokemons}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        changeCurrentPage={onChangeCurrentPage}
                        changeSinglePokemon={onSelectSinglePokemon}
                    />
                    <DetailsCard
                        item={singlePokemon}
                    />
                </div>
            </div>
        </div>
    )
}

export default Pokedex
