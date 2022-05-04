import React, { useEffect, useState } from 'react';
import CharacterCard from '../components/Character/CharacterCard';
import { fetchApi } from '../services/rickapi';
import { Link, Route, useRouteMatch } from 'react-router-dom'
export default function Main() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const { url, path } = useRouteMatch();

  useEffect(() => {
    const data = async () => {
      const info = await fetchApi();
      setCharacters(info);
      setLoading(false);
    };

    data();
  }, []);

  if (loading) return <div className="loader">...loading</div>;

  return (
    <>
      <div>
        <h1>Character List</h1>
        {characters.map(( character ) => (
          <CharacterCard key={character.id} character={character}>
         <Link to={`${url}/${character.id}`}>
           {character.name}
           </Link>
           </CharacterCard>
        ))}
        <Route path={`${path}/:id`}>
          <CharacterCard  />
        </Route>
      </div>
    </>
  );
}
