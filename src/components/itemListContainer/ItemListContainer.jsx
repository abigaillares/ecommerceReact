import React from 'react'
import "./itemListContainer.scss"

const ItemListContainer = ({greeting}) => {
  return (
    <div className='greeting'>
      {greeting}
    </div>
  )
}

export default ItemListContainer