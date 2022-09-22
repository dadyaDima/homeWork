import React, { useState } from "react";

const NavLink = ({...props}) => {

  const handleClick = () => {
    props.onActiveChange(props.id)
  }

  const getClasses = () => {
    let classes = 'nav-link'
        return (classes += props.active ? " active" : "")
  }

  return <div>
    <li className="nav-item" onClick={handleClick}>
      <a href={props.link} className={getClasses()}>{props.text}</a>
    </li>
  </div>
}

export default NavLink