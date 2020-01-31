import React, {useRef, useEffect} from 'react';
import './App.scss';
import photo from './assets/photo.jpg';
import CSSRulePlugin from "gsap/CSSRulePlugin"
import {TimelineLite, Power2} from 'gsap'


function App() {
  let container = useRef(null)
  let image = useRef(null)
  let imageReveal = CSSRulePlugin.getRule('.img-container:after')

  const tl = new TimelineLite()
  
  useEffect( ()=>{
    tl
    .to(container, 1, {css: {visibility: 'visible'}})
    .to(imageReveal, 1, {width: '0%', ease:Power2.easeOut })
    .from(image, 0.8, {scale: 2, ease:Power2.easeInOut, delay: 0.3})
  }, [])

  return (
    <section className="main">
      <div 
      ref={el=>(container=el)}
      className="container">
        <>
          <div className="img-container">
            <img 
            ref={el=>(image=el)}
            src={photo} />
          </div>
        </>
      </div>
    </section>
    
  );
}

export default App;
