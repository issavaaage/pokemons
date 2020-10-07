import React from 'react'

function DetailsCard({item}) {
    return (
        <div className="details-card">
            {item&&
                <div className="big-card">
                    <div className="big-card__img">
                        <img src={item.sprites.front_shiny} alt=""/>
                    </div>
                    <div className="big-card__name">
                        <p>{item.name}</p>
                    </div>
                    <div className="big-card__table">
                        <table>
                            <thead>
                                <tr>
                                    <td>Type</td>
                                    <td>Fire</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    item.stats.map((el, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{el.stat.name}</td>
                                                <td>{el.base_stat}</td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td>Weight</td>
                                    <td>{item.weight}</td>
                                </tr>
                                <tr>
                                    <td>Total moves</td>
                                    <td>{item.moves.length}</td>
                                </tr>
                            </tbody>
                            {

                            }
                        </table>
                    </div>
                </div>
            }
        </div>
    )
}

export default DetailsCard
