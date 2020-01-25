import React, { useRef } from 'react';
import './App.scss';
import { useMouse, useWindowSize } from 'react-use';
import Home from './pages/Home/Home';

const App: React.FC = () => {
  let ref = useRef(null);
  let mousePosition = useMouse(ref);
  let windowSize = useWindowSize();
  console.log(mousePosition.elX, mousePosition.elY);
  let relativeX = mousePosition.elX;
  let relativeY = mousePosition.elY;

  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
