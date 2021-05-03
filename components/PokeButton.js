import React from 'react'
import Link from 'next/link'

const PokeButton = ({ type }) => {

    return (
        <Link href="/pokedex">
            <a className={`w-20 flex flex-row justify-center items-center rounded-xl p-2 ${ type }`}>
                <span>Volver</span>
            </a>
        </Link>
    )
}

export default PokeButton