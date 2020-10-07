import axios from 'axios';

export const fetchPokemons = (page = "http://pokeapi.co/api/v2/pokemon/?limit=12") => (dispatch) => {
    (async () => {
        const list = await axios.get(page).then(({data}) => {
            //console.log(data);
            dispatch(setPrevPage(data.previous));
            dispatch(setNextPage(data.next));
            return data.results;
        });
        const megaList = [];
        for (let i = 0; i< list.length; i++) {
            megaList[i] = await axios.get(list[i].url).then(({data}) => {
                return data;
            });
        }
        
        dispatch(setPokemons(megaList));
    })()
}

export const setPokemons = (items) => ({
    type: "SET_POKEMONS",
    payload: items
});

export const setSinglePokemon = (item) => ({
    type: "SET_SINGLE_POKEMON",
    payload: item
})

export const setPrevPage = (prevPage) => ({
    type: "SET_PREV_PAGE",
    payload: prevPage
});

export const setNextPage = (nextPage) => ({
    type: "SET_NEXT_PAGE",
    payload: nextPage
});

export const changePage = (page) => (dispatch) => {
    dispatch(fetchPokemons(page));
};


