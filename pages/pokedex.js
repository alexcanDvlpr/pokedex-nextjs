import React from 'react'
import Layout from '../components/layouts/Layout'
import PokeCard from '../components/PokeCard'

const Pokedex = ({ pokemons }) => {

    return (
        <Layout>
            <h1 className="pt-4 text-2xl md:pt-7 md:text-5xl text-center">Pokedex - Primera Generación</h1>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-3">
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