import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const GetTitle = () => {

  const [films, setfilms] = useState([]);

  useEffect(()=> {
    getApiInfo()
  },[]) 

  const {info} = useParams();
  console.log(info)

  //Get info Api and add to state
  const getApiInfo = async () => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=fa97f60d1d3864cbc1194358693ca4b5&language=es-ES`;
    const response = await fetch(url);
    const res = await response.json();
    // console.log(res.results)
    setfilms(res.results)
  }

  return (
    <div>GetOriginTitle component 
    <ul> {
      films.filter((filmPopular, idx) => filmPopular.title.toLowerCase().includes(info.toLowerCase())).map((filmPopular) => {
        return (
            <li key={filmPopular.idx} >
            <p>{filmPopular.title}</p>
            <img src={"https://image.tmdb.org/t/p/w200" + filmPopular.poster_path} alt="" />
            </li>
        ) 
      })}
    </ul>
    </div>
  )
}

export default GetTitle