interface PokemonProps {
  pokemon: string;
}

export default function Pokemon({ pokemon }: PokemonProps) {
  return <div className={`party-tag ${pokemon.replace(" ", "")}`}>{pokemon}</div>;
}
