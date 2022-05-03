import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchId } from '../../services/rickapi';


export default function CharacterDetail() {
    const { id } = useParams();
    const [info, setInfo] = useState({});
    const history = useHistory('');

    useEffect(() => {
    const fetchInfo = async() => {
        const data = await fetchId(id);
        setInfo(data);
    }
    fetchInfo();

    },[id]);
    
    const goBack = async() => {
        history.push('/')
    }


  return (
      <article>
    {/* <div> */}
    <img alt="Image of character"src={info.image}/>
    <h2>{info.name}</h2>
      <h3>{info.status}</h3>
      <h4>{info.species}</h4>
      <h5>{info.type}</h5>
      <h5>{info.gender}</h5>
      {/* <img alt="Image of character"src={info.image}/> */}
    {/* </div> */}
    <button onClick={goBack}>Return to character page</button>
    </article>
  );
}