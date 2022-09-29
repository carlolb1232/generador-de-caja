import { useState } from 'react';
import './App.css';
import ColorBox from './Components/ColorBox';
import Form from './Components/Form';

function App() {
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);

  const getColors = (color)=>{
    setColors([color, ...colors])
  }
  
  const getSizes = (size)=>{
    setSizes([size, ...sizes])
  }
  return (
    <div className="App">
      <Form onColor={ getColors } onSize={getSizes}/>
      <ColorBox background={colors} widthHeigth={sizes}/>
    </div>
  );
}

export default App;
