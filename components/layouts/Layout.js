import React from 'react'
import Head from 'next/head'
import Navbar from '../shared/Navbar';

const Layout = ({ children, title }) => {

    const headTitle = (title) ? title : 'Pokedex NextJs - Alex Cantón';

    return (
        <>
        <Head>
            <title>{ headTitle }</title>
        </Head>
        <Navbar />
        <div className="p-0 m-0 bg-gray-200 w-full min-h-screen h-auto flex justify-center items-center">
            <div className="w-6/12 h-auto py-9 px-2">
                {children}
            </div>
        </div>
        </>
    )
}

export default Layout