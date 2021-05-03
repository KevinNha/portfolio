import React, { useEffect } from 'react';
import './Main.css'

import Typewriter from "typewriter-effect";

function Main() {
  const textsToShow = ['PROGRAMMER',  'PROBLEM-SOLVER', 'FOOD-LOVER', ];
  const START_DELAY_AND_PAUSE_SPEED = 1000
  const TYPE_SPEED = 100

  // useEffect(() => {
  //   document.title = "Welcome";
  // })

  document.title = "Kevin's Portfolio";

  return (
    <div className='main-container'>
      <span id='descriptions'>
      <Typewriter
          options={{
            strings: textsToShow,
            autoStart: true,
            loop: true,
            deleteSpeed: TYPE_SPEED,
            delay: TYPE_SPEED,
            
          }}
        />
      </span>
    </div>
  )
}
export default Main;