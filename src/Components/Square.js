import React from 'react'

const Square = ({values,onClick,isWinningSquare}) => {
  return (
    <button type='button' className={`square ${isWinningSquare?'winning' : ''} ${values==='X'?'text-green':'text-orange'}`}
    onClick={onClick} 
    style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}>{values}</button>
  )
}

export default Square


