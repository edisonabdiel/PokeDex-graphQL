import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState([]);
  const [pokemonId, setPokemonId] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.results);
        setPokemonName(data.results.map((pokemon) => pokemon.name));
        setPokemonId(data.results.map((pokemon) => pokemon.url.split('/')[6]));
        console.log(data.results);
      })
  }, [])

  return (
    <div>
      <Head>
                <title>PokeDex</title>
                {/* <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
      <div>
        <h1>The OGs</h1>
        <ol>
          {
            pokemon.map((pokemon, index) => {
              return (
                <li key={index}>
                  <Link href={`/pokemon/${pokemonId[index]}`}>
                    <a>{pokemonName[index]}</a>
                  </Link>
                </li>
              )
            })
          }
        </ol>
      </div>
    </div>
  )
}