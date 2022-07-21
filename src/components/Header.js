import React from 'react'

const Header = () => {
  return (
    <section>
    <nav className="nav--container">
      <span className="nav--link">Title</span>
      <span className="nav--link">V.O. Title</span>
      <span className="nav--link">Overview</span>
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