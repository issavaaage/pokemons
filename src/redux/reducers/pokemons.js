const initialState = {
    pokemons: [],
    prevPage: null,
    currentPage: null,
    nextPage: null,
    singlePokemon: null
}

const pokemons = (state = initialState, action) => {
    switch (action.type) {
        case "SET_POKEMONS": {
            return {
                ...state,
                pokemons: action.payload
            }
        }
        case "SET_NEXT_PAGE": {
            return {
                ...state,
                nextPage: action.payload
            }
        }
        case "SET_PREV_PAGE": {
            return {
                ...state,
                prevPage: action.payload
            }
        }
        case "SET_SINGLE_POKEMON": {
            return {
                ...state,
                singlePokemon: action.payload
            }
        }
        default:
            return state;
    }
}

export default pokemons;