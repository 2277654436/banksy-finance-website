import React from 'react'
import './index.css'
import banksyLineItem from '../../image/baksyLine/banksyLineItem.png'


function BanksyLine() {
  return (
    <div className="banksyLine">
      <div className="list">
        <div className="cc rowup">
          {
            new Array(50).fill(
              <div className="item"><img src={banksyLineItem} /></div>,
            )
          }
        </div>
      </div>
    </div>
  )
}

export default BanksyLine
