import './App.scss';
import React from 'react';
import logo from 'assets/logo.svg';

const App = (props) => (
  <div className="App">
    <header className="App__Header">
      <img src={logo} className="App__Logo" alt="이듬(E.UID) 블렌디드 러닝" />
      <p className="App__Desc">
        "이듬" 블렌디드 러닝이 지향하는 비전은 동반 성장에 있습니다.<br />
        강사에서 수강생으로 한 방향으로 흘러가는 지식 전달이 아닌, 함께 공감하고, 이해하며 경험하는 교육 가치를 통해 공동의 혁신을
        이끌어내는 것을<br />목표로 합니다.
      </p>
      <a
        className="App__Link"
        href="https://yamoo9.github.io/EUID"
        target="_blank"
        rel="noopener noreferrer"
      >
        → 이듬(E.UID) 블렌디드 러닝
      </a>
    </header>
  </div>
);

export default App;
