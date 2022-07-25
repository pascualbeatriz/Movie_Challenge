import React from 'react'

const Movies = ({films}) => {
  return (
    <ol className='section--home-list'>
    {
      films.filter((filmAmount, id) => id < 10).map((filmList,id) => {
        return (
          <li className='section--home-list__item' key={filmList.id}>
            <p className='item--title'>{filmList.title}</p>
            <img className='item--image' src={"https://image.tmdb.org/t/p/w200/" + filmList.poster_path} alt=""/>
            {/* <p className='item--title'>Title: {filmList.overview}</p> */}
          </li>
        )
      })
    }
    </ol>
  )
}

export default Movies