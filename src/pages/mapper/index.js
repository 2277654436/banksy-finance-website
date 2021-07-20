import React from "react";
import './index.css'
import MapperImg from '../../image/mapper/mapperImg.png'
import clsx from "clsx";

function Mapper({ active }) {
  return (
    <div className="mapper section">
      <div className={clsx('mapper-title', active && 'aos-animate')} data-aos="flip-left">
        NFT MAPPER
      </div>
      <div className="mapper-text">
        The NFT mapper can effectively solve
        the problem of poor liquidity
        for more flexible and diversified business
      </div>
      <img src={MapperImg} className={clsx('mapper-img', active && 'aos-animate')} data-aos="flip-right"/>
    </div>
  )
}

export default Mapper
