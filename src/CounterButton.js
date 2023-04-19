import React, { useState } from 'react';
import './App.css';


// Component for the first task
function CounterButton() {
  const [count, setCount] = useState(1);
  const [bgColor, setBgColor] = useState('#FFFFFF'); // set initial background color to white

  function handleButtonClick() {
    setCount(prevState => prevState + 1);
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // generate random hex color
    setBgColor(randomColor); // set the background color to the random color
  }

  const style =
  { backgroundColor: bgColor,
     height: '130px',
     width : "130px",
     borderRadius: '50%',
     border: "0px",
     fontSize:"24px",
     fontFamily: "Roboto",
     fontWeight: "700",
     }
  

  return (
    <div >
      <button style={style} onClick={handleButtonClick}> {count} <br/> <span className='click-to-increase'>Click To increase counter</span> </button>
    </div>
  );
}
export default CounterButton

/* import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('#FFFFFF'); // set initial background color to white

  function handleButtonClick() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // generate random hex color
    setBgColor(randomColor); // set the background color to the random color
  }

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh' }}>
      <button onClick={handleButtonClick}>Change Color</button>
    </div>
  );
}

export default App;
*/