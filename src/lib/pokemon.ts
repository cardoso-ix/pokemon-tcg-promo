import { asset } from "./site";

export const pokemon = {
  pikachu: { name: "Pikachu", src: asset("pokemon/pikachu.png") },
  charizard: { name: "Charizard", src: asset("pokemon/charizard.png") },
  mewtwo: { name: "Mewtwo", src: asset("pokemon/mewtwo.png") },
  gengar: { name: "Gengar", src: asset("pokemon/gengar.png") },
  umbreon: { name: "Umbreon", src: asset("pokemon/umbreon.png") },
  eevee: { name: "Eevee", src: asset("pokemon/eevee.png") },
  dragonite: { name: "Dragonite", src: asset("pokemon/dragonite.png") },
} as const;

export const lineup = [
  pokemon.pikachu,
  pokemon.charizard,
  pokemon.mewtwo,
  pokemon.gengar,
  pokemon.umbreon,
  pokemon.eevee,
  pokemon.dragonite,
] as const;

export const artworkCredit =
  "Artwork das criaturas via PokéAPI (official artwork). Pokémon é marca da Nintendo, Creatures e Game Freak. Esta página não é afiliada.";
