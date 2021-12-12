import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'


import './Roulette.css'


const data = [
    { option: 'Grey' },
    { option: 'Inferno' },
    { option: 'Wanted' },
    { option: 'Raging Bull'},
    { option: 'Liasons'}
  ]
  export default () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
  
    const handleSpinClick = () => {
      const newPrizeNumber = Math.floor(Math.random() * data.length)
      setPrizeNumber(newPrizeNumber)
      setMustSpin(true)
    }
  
    return (
      <div class="parent">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
  
          onStopSpinning={() => {
            setMustSpin(false)
          }}
        />
        <button onClick={handleSpinClick}>SPIN</button>
        


       
        
  
        
        
        </div>
        

        
        
        
        
        
        


    )
  }


  
    
 
    
