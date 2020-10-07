import React from 'react'

function CardsList({items, nextPage, prevPage, changeCurrentPage, changeSinglePokemon}) {

    const goToNext = () => {
        changeCurrentPage(nextPage);
    }

    const goBack = () => {
        changeCurrentPage(prevPage)
    }

    return (
        <div className="cards-list">
            {items&&
                items.map((el, i) => {
                    return (
                        <div key={i} className="card" onClick={() => changeSinglePokemon(el)}>
                            <div className="card__img">
                                <img src={el.sprites.front_shiny} alt=""/>
                            </div>
                            <div className="card__name">
                                <p>{el.name}</p>
                            </div>
                            <div className="card__type">
                                {el.types.map((el, i) => {
                                    return (
                                    <p key={i}>{el.type.name}</p>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
            }
            <div className="cards-list__controllers">
                <button onClick={prevPage !== null ? goBack : () => {}}>Prev</button>
                <button onClick={goToNext}>Next</button>
            </div>
        </div>
    )
}

export default CardsList
