import React, { useState } from 'react'

const Form = (props) => {
  const { onColor, onSize } = props
  const [color, setColor] = useState("");
  const [size, setSize] = useState(250);

  const handleColorInput = (e)=>{
    const { value } = e.target
    // console.log(value)
    setColor(value)
  }
  
  const handleSize = (e)=>{
    const { value } = e.target
    console.log(value)
    setSize(value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    onColor( color );
    onSize( size );
    setColor("");
    setSize(250);
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label>Color:</label>
        <input 
          type="text"
          placeholder='Ingrese el nombre del color'
          onChange={handleColorInput}
          value={color}
        />
      </div>
      <div className="form-group">
        <label>Tamaño:</label>
        <input 
          type="numeric"
          placeholder='Ingrese el tamaño del bloque'
          onChange={handleSize}
          value={size}
        />
      </div>
      <button
        type='submit'
      >
        {`Agregar recuadro`}
      </button>
    </form>
  )
}

export default Form;