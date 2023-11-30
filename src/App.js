import './App.css';
import React, { useState } from 'react';
import { Theme } from '@radix-ui/themes';
import Navbar from './components/Navbar'
import Home from './components/Home';
import './assets/css/theme-config.css'

function App() {
  const [mode, setMode] = useState('light')
  const [theme, setTheme] = useState('blue')

  const toggleTheme = (event) => {
    event.stopPropagation()
    let data = JSON.parse(JSON.stringify(event.target.dataset))
    let color = data.theme
    setTheme(color)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      let elem = document.getElementsByTagName('html')[0]
      elem.classList.toggle('dark-theme')
      let darkButton = document.getElementsByClassName('dark-button')[0]
      darkButton.style = 'display: none'

      let lightButton = document.getElementsByClassName('light-button')[0]
      lightButton.style = 'display: unset'
    }
    else {
      setMode('light')
      let elem = document.getElementsByTagName('html')[0]
      elem.classList.toggle('dark-theme')
      let button = document.getElementsByClassName('light-button')[0]
      button.style = 'display: none'

      let darkButton = document.getElementsByClassName('dark-button')[0]
      darkButton.style = 'display: unset'
    }
  }
  return (
    <>
      <Theme accentColor={theme} radius='full'>
        <Navbar mode={mode} toggleMode={toggleMode} theme={theme} toggleTheme={toggleTheme} />
        <Home />
      </Theme>
    </>
  );
}

export default App;
