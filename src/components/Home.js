import React, { useState, useEffect } from 'react';

const Home = () => {
  const [films, setfilms] = useState([]);

  useEffect(()=> {
    getApiInfo()
  },[]) 

  //Get info Api and add to state
  const getApiInfo = async () => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=fa97f60d1d3864cbc1194358693ca4b5&language=es-ES`;
    const response = await fetch(url);
    const res = await response.json();
    // console.log(res.results)
    setfilms(res.results)
  }

  return (
    <section className='section--home'>
    <h1 className='section--home-title'>Home</h1>
    <ol className='section--home-list'>
    {
      films.filter((filmAmount, id) => id < 10).map((filmList,id) => {
        console.log(filmList);
        return (
          <li className='section--home-list__item' key={filmList.id}>
            <p>Title: {filmList.title}</p>
          </li>
        )
      })
    }
    </ol>
    </section>
  )
}

export default Home