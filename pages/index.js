import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokedex NextJs - Alex Cantón</title>
      </Head>
      <div className="flex justify-center items-center bg-pokeball bg-center bg-no-repeat w-screen h-screen">
        <Link href="/pokedex">
          <a className="text-lg font-bold pl-6 hover:underline">
            Poke Click Me!
        </a>
        </Link>
      </div>
      <div className="absolute bottom-0 right-0 left-0">
        <div className="flex justify-center items-center">
          <p className="text-lg pb-5">Hecho por
        <Link href="https://github.com/alexcanDvlpr" passHref>
              <a target="_blank" className="hover:underline font-bold">&nbsp;Alexcan.Dvlpr&nbsp;</a>
            </Link>
         con ❤️</p>
        </div>
      </div>
    </>
  )
}
