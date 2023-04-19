import { useState } from "react";

import './App.css';


function BooleanButton() {
  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    setIsRed(!isRed);
  };

  return (
    <div>
      <button className="change-colour-btn" onClick={handleClick} style={{ backgroundColor: isRed ? 'red' : 'blue' }}>
        Change Colour
      </button>
    </div>
  );
}
export default BooleanButton