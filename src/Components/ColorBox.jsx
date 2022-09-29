import React from 'react'

const ColorBox = (props) => {
  const { background, widthHeigth } = props

  return (
    <div className='colors-container'>
    {
      background.map((e, i)=>
        <div className='color-block' style={{background: e, width:`${widthHeigth[i]}px`, height:`${widthHeigth[i]}px`}}></div>
      )
    }
    </div>
  )
}

export default ColorBox;