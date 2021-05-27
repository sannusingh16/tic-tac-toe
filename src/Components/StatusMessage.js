import React from 'react'

const StatusMessage = ({winner,current}) => {
  const nomove=current.board.every((el)=>el !==null)
  return (
    
    <div className="status-message">
    {winner && <>
    winner is <span className={winner==='X'?'text-green':'text-orange'}>{winner}</span>
    </>}
    {!winner && !nomove && <>
    Next player is <span className={current.isXNext?'text-green':'text-orange'}>
      {current.isXNext?'X':'O'}</span>
    </>}
    {!winner && nomove && <>
    <span className="text-green"> X </span> And 
    <span className="text-orange"> O </span>Tied
    </>}
    </div>
  )
}

export default StatusMessage
