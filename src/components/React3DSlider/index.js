import React, { useState } from 'react'
import './index.css'
import Slider from 'react-slick'
import Image2 from '../../image/support/2.png'
import Image4 from '../../image/support/nft1.jpg'
import Image5 from '../../image/support/nft2.png'
import Image6 from '../../image/support/nft3.png'
import Image7 from '../../image/support/nft4.png'
import Image8 from '../../image/support/nft9.png'


import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useMediaQuery } from 'react-responsive'

const images = [Image2, Image4,Image5, Image6, Image7, Image8]

function React3DSlick() {
  const isMobile = useMediaQuery({ query: '(max-width: 1100px)' })

  let slider = undefined

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <RightOutlined style={{ color: '#bfbfbf' }} />
      </div>
    )
  }

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <LeftOutlined style={{ color: '#bfbfbf' }} />
      </div>
    )
  }

  const [currentIndex, setCurrentIndex] = useState(0)

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: isMobile ? 3 : 5 ,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setCurrentIndex(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: !isMobile
  }

  const onImageClick = (imageIndex, currentIndex) => {
    if (imageIndex === currentIndex) {
      return
    }

    setCurrentIndex(imageIndex)
    slider.slickGoTo(imageIndex)
  }

  return (
    <Slider {...settings} className="slider" ref={ref => (slider = ref)}>
      {images.map((img, idx) => (
        <div className={idx === currentIndex ? 'slide activeSlide' : 'slide'}
          key={idx}
          onClick={() => onImageClick(idx, currentIndex)}
        >
          <img src={img} alt={img} />
        </div>
      ))}
    </Slider>
  )
}

export default React3DSlick
