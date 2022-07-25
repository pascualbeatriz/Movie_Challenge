import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const GetTitle = () => {

  const [films, setFilms] = useState([]);
  const {info} = useParams();

  useEffect(()=> {
    getApiInfo()
  },[]) // eslint-disable-line react-hooks/exhaustive-deps


  //Get info Api and add to state
  const getApiInfo = async () => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=fa97f60d1d3864cbc1194358693ca4b5&language=es-ES`;
    const response = await fetch(url);
    const res = await response.json();
    // console.log(res.results)
    setFilms(res.results)
  }

  return (
    <section className='section--getOverview'>
    <h2 className='section--getOverview-title'>Overview</h2>
    <ul className='section--getOverview-list'>{
      films.filter((filmPopular, idx) => filmPopular.overview.toLowerCase().includes(info.toLowerCase())).map((filmPopular) => {
        return (
            <li className='section--getOverview-list__item' key={filmPopular.idx} >
            <p className='item--title'>{filmPopular.original_title}</p>
            <img className='item--image'src={"https://image.tmdb.org/t/p/w200" + filmPopular.poster_path} alt="" />
            <p className='item--text'>{filmPopular.overview}</p>
            </li>
        ) 
      })}
    </ul>
    </section>
  )
}

export default GetTitle