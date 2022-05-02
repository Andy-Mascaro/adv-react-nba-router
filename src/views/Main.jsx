import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import fetchApi from '../services/rickapi';

export default function Main() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] =useState(true);
  const { id } = useParams();

useEffect (() => {
const data = async () => {
const info = await fetchApi(id);
  setCharacter(info);
setLoading(false);
 };

 data();
 }, []);

 if (loading) return <div className='loader'>...loading</div>;

  return (
    <div>Main</div>
  )
}
