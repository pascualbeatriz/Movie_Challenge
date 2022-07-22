import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {

  const [infoInput, setInfoInput] = useState('');
  const [title, setTitle] = useState('/');
  const [voTitle, setVoTitle] = useState ('/');
  const [overview, setOverview] = useState('/');

  return (
    <section>
    <nav className="nav--container">
    <NavLink to={title}>
      <span className="nav--link">Title</span>
    </NavLink>
    <NavLink to="title_original">
      <span className="nav--link">V.O. Title</span>
    </NavLink>
    <NavLink to="overview">
      <span className="nav--link">Overview</span>
    </NavLink>
    </nav>

    <form>
      <label>
        Introduce el nombre de una película:
        <input type="text" name="name" value={infoInput} onChange={(e) => 
        {
          setInfoInput(e.target.value)
          if(e.target.value === ''){
            setTitle('/')
          } else {
            setTitle('/title/' + e.target.value)
          }
        }
        
        }/>
      </label>
    </form>
    </section>
  )
}

export default Header;