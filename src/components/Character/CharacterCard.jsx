import React from 'react'

export default function CharacterCard({ character }) {
  return (
      <article key={character.id}>
    <div>
    <h2>{character.name}</h2>
      <h3>{character.status}</h3>
      <h4>{character.species}</h4>
      <h5>{character.type}</h5>
      <h5>{character.gender}</h5>
    </div>
    </article>
  );
}
