import React, {useRef, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

import {TweenMax, Power3} from 'gsap'


function App() {
  let app = useRef(null)
  let circleYellow = useRef(null)
  let circleMaroon = useRef(null)
  let circleBlueviolet = useRef(null)

  const [circleState, setState] = useState(false)

  const handleExpand = () => {
    TweenMax.to(circleYellow, .8, {width: 200, height: 200, ease: Power3.easeOut})
    setState(true)
  }
  const handleShrink = () => {
    TweenMax.to(circleYellow, .8, {width: 75, height: 75, ease: Power3.easeOut})
    setState(false)
  }

  useEffect( () => {
    TweenMax.to( app, 0, {css: {visibility:'visible'}} )
    // TweenMax.from(circleYellow, .8, {opacity:0, x: 40, ease: Power3.easeOut, 
    // delay: 0.5})
    // TweenMax.from(circleMaroon, .8, {opacity:0, x: 40, ease: Power3.easeOut, delay: 1})
    // TweenMax.from(circleBlueviolet, .8, {opacity:0, x: 40, ease: Power3.easeOut, delay: 1.5})
    TweenMax.staggerFrom([circleYellow, circleMaroon, circleBlueviolet], .8,{opacity:0, x: 40, ease: Power3.easeOut}, 0.5)
  }, [])

  return (
    <div
    ref={ el => app = el}  
    className="App">
      <header className="App-header">
        <div className="circle-container">
          <div
          onClick={circleState !== true ? handleExpand : handleShrink}
          ref={ el => circleYellow = el}
          className="circle yellow"></div>
          <div
          ref={ el => circleMaroon = el}
          className="circle maroon"></div>
          <div
          ref={ el => circleBlueviolet = el}
          className="circle blueviolet"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
