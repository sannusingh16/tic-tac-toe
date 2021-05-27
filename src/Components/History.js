import React from 'react'

const History = ({history,moveto,currentMove}) => {
  return(
    <div className="history-wrapper">
    <ul className="history">
      {history.map((_,move)=>{
      return(
      <li key={move}>
      <button 
      className={`btn-move ${currentMove===move?'active':''}`}
      type='button' onClick={()=>{
        moveto(move)
      }}>{move===0 ?'Go to Start':`Go to move #${move}`}</button>
      </li>
      )
      })}
    </ul>
    </div>
    )
}

export default History
