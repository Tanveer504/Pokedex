import React from 'react'
import './Ability.scss'
function Ability({ability}) {
  return (
    <h6 className="pokemon__ability">
      {ability.map((abilities, index) => (
        <span key={index}>{abilities.ability.name} </span>
      ))} 
    </h6>
  )
}

export default Ability