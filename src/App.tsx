import React from 'react';
import './App.css';
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io';

const App: React.FC = () => {
  return (
    <div className="App">
      <h2>アンビデレです。私のページへようこそ！</h2>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ambidere">
        <IoLogoTwitter size={25} color={'#E53D77'}></IoLogoTwitter>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/iequivocality">
        <IoLogoGithub size={25} color={'#E53D77'}></IoLogoGithub>
      </a>
    </div>
  );
}

export default App;
