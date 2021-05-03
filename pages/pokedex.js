import React from 'react'
import Layout from '../components/layouts/Layout'
import PokeCard from '../components/PokeCard'

const Pokedex = ({ pokemons }) => {

    return (
        <Layout>
            <h1 className="pt-7 text-5xl">Pokedex - Primera Generación</h1>
            <hr />
            <div className="grid-container">
                {
                    pokemons.map((pokemon, index) => (<PokeCard key={ pokemon.name } pokemon={ pokemon } index={ index } />))
                }
            </div>
        </Layout>
    )
}

export default Pokedex

export async function getStaticProps() {

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`, { method: 'GET' })

        const { results } = await res.json()

        let pokemons = results.map((pokemon, index) => {
            const paddedIndex = ('00' + (index + 1)).slice(-3)
            const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ paddedIndex }.png`
            return { 
                ...pokemon,
                image
             }
        })

        return { props: { pokemons } }
    } catch (error) {
        console.error(error);
    }

}