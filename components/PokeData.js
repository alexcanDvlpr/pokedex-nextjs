import React from 'react'

const PokeData = ({ data }) => {

    return (
        <>
            <h4 className="text-4xl mb-3">Datos:</h4>
            <ul className="ml-2">
                {
                    data.map(li => (
                        <li className="mb-2" key={ li.key }>
                            <p className="text-xl">
                                <span>{ li.key }</span>
                                <span className="ml-1 text-2xl">{ li.value } { (li.suffix) ? li.suffix : '' }</span>
                            </p>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default PokeData