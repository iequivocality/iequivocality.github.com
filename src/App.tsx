import React, { useRef } from 'react';
import './App.scss';
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io';
import { useMouse, useWindowSize } from 'react-use';
import Home from './pages/Home/Home';
import starrysky from './assets/img/starrysky.svg';
import moonlight from './assets/img/moonlight.svg';

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
      {/* <div className="Page">
        <div className="Page-Foreground" ref={ref} style={{ transform : `translate3d(${Math.min(20, relativeX/30) * -1}px,${Math.min(20, relativeY/45) * -1}px,0)`}}>
          <div className="Page-Title">ambi</div>
          <div className="Page-Subtitle">software developer</div>
          <div className="Page-Subtitle">aidoru fan</div>
          <div className="Page-Buttonbar">
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ambidere">
              <IoLogoTwitter size={25} color={'#E53D77'}></IoLogoTwitter>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/iequivocality">
              <IoLogoGithub size={25} color={'#E53D77'}></IoLogoGithub>
            </a>
          </div>
        </div>
        <div className="Page-Moon">
          <img src={moonlight} className="Page-MoonLight"/>
        </div>
        <div className="Page-Ocean"></div> */}
        {/* <div className="Page-Background">
        </div> */}
      {/* </div> */}
      {/* <h2>アンビデレです。私のページへようこそ！</h2> */}
    </div>
  );
}

export default App;
