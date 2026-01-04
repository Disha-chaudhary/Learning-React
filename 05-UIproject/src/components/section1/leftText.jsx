import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './heroText.jsx'
import Arrow from './arrow.jsx'

const LeftText = () => {
  return (
    <div className="h-full  w-3/4 -300 flex flex-col justify-between p-10">
      <HeroText />
      <Arrow />

    </div>
  )
}

export default LeftText
