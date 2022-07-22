import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <section>
    <nav className="nav--container">
    <NavLink to="title">
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
        <input type="text" name="name" />
      </label>
    </form>
    </section>
  )
}

export default Header;