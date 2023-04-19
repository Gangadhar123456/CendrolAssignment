
import BooleanButton from "./BooleanButton";
import ComponentA from "./ComponentA";
import CounterButton from "./CounterButton";

import './App.css';


function App() {
  return (
    <div className="App-container">
      <CounterButton />
      <ComponentA />
      <BooleanButton />
    </div>
  );
}

export default App;
