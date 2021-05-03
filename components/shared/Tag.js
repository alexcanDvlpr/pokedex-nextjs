import React from 'react'
import { getPokeType } from '../../data/types'

const Tag = ({ type }) => {


    return (
        <div className={ `mt-4 mx-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full ${ type }` }>
            { getPokeType(type) }
        </div>
    )
}

export default Tag