import React from 'react'
import Link from 'next/link'
import { nameToTitleCase } from '../utils/global.utils'

const PokeCard = ({ pokemon, index }) => {

    return (
        <Link href={ `/pokemon?id=${ index + 1 }` }>
            <a className="animate__animated animate__fadeIn border-2 rounded">
                <div className="pokecard w-full my-3 flex items-center border-2 rounded-lg bg-red-300 hover:bg-red-400 shadow-md">
                    <img className="w-20 h-auto" src={pokemon.image} alt={pokemon.name} />
                    <p className="text-2xl ml-1">{ index + 1 }.</p>
                    <p className="text-2xl ml-2">{ nameToTitleCase(pokemon.name) }</p>
                </div>
            </a>
        </Link>
    )
}

export default PokeCard