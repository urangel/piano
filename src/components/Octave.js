import React, { useState } from "react";
import BlackKey from "./BlackKey";
import WhiteKey from "./WhiteKey";

export default function Octave(props) {
  const [key, setKey] = useState("C");
  const [whiteKeys, setWhiteKeys] = useState(
    ["C", "D", "E", "F", "G", "A", "B"]);
  const [blackKeys, setBlackKeys] = useState(
    {
      sharps: ["C♯", "D♯", "F♯", "G♯", "A♯"], 
      flats: ["D♭", "E♭", "G♭", "A♭", "B♭"]
    })
  const [useSharps, setUseSharps] = useState(true);

  const calcLeftValues = (width) => {

  }
  
  const toggleSharps = () => {
    useSharps ? setUseSharps(false) : setUseSharps(true);
  }

  return (
    <div>
      <div id="piano" style={{width: props.width + "px"}}>
        {
        whiteKeys.map(each => {
          return <WhiteKey key={each} myKey={each}></WhiteKey>;
        })
        }
        {
        useSharps ? 
          blackKeys.sharps.map((each, index) => {
            return <BlackKey key={each} myKey={each} index={index}></BlackKey>;
          }) :
          blackKeys.flats.map((each, index) => {
            return <BlackKey key={each} myKey={each} index={index}></BlackKey>
          })
        }
      </div>
      <button onClick={toggleSharps}>Toggle Sharps</button>
    </div>
    
  );
}
