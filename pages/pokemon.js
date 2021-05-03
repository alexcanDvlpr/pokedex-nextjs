import React, { useState } from 'react'
import Layout from '../components/layouts/Layout'
import PokeButton from '../components/PokeButton'
import PokeData from '../components/PokeData'
import Tag from '../components/shared/Tag'
import { decimetresToMetres, hectogramsToKilograms, nameToTitleCase } from '../utils/global.utils'

const Pokemon = ({ pokemonProp }) => {

    const [pokemon, setPokemon] = useState(pokemonProp)

    const dataOptions = [
        { key: 'Al derrotarme ganas:', value: pokemon.base_experience, suffix: 'XP' },
        { key: 'Peso:', value: hectogramsToKilograms(pokemon.weight), suffix: 'Kg.' },
        { key: 'Altura:', value: decimetresToMetres(pokemon.height), suffix: 'M.' },
        { key: 'Especie:', value: pokemon.specie, suffix: '' }
    ]

    return (
        <Layout title={`${nameToTitleCase(pokemon.name)} - Alex Cantón`}>
            <div className="w-full h-auto mt-3">
                <PokeButton type={ pokemon.types[0].type.name } />
            </div>
            <div className={`flex flex-col-reverse md:flex-row flex-nowrap border-${pokemon.types[0].type.name} rounded-xl p-4 mt-3 md:pt-0`}>
                <div className="w-full md:w-1/2">
                    <h1 className="text-6xl">{nameToTitleCase(pokemon.name)}</h1>
                    <h2 className="my-2 text-4xl">#{pokemon.paddedIndex}</h2>
                    {
                        pokemon.types.map(({ type }) => (
                            <Tag key={type.name} type={type.name} />
                        ))
                    }
                    <div className="my-6">
                        <PokeData data={dataOptions} />
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <img src={pokemon.image} alt="Electrobuzz" />
                </div>
            </div>
        </Layout>
    )
}

export default Pokemon

export async function getServerSideProps({ query }) {

    const pokeId = query.id;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`, { method: 'GET' })
    const pokemon = await res.json()

    const paddedIndex = ('00' + (pokemon.id)).slice(-3)
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`

    const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}/`, { method: 'GET' })
    const speciesJson = await speciesRes.json()

    let specie = 'Unknown';
    if (speciesJson.genera.length > 0 && speciesJson.genera[5]) {
        specie = speciesJson.genera[5].genus;
    }

    return { props: { pokemonProp: { ...pokemon, image, specie, paddedIndex } } }
}