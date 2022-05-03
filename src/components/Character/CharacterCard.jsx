import React from 'react'
import { Link } from 'react-router-dom';

export default function CharacterCard({ character }) {
  return (
      <article>
    <div>
    <Link to={`/${character.id}`}>
    <h2>{character.name}</h2>
    </Link>
    </div>
    </article>
  );
}
