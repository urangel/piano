import React, { useState } from "react";
import BlackKey from "./BlackKey";
import WhiteKey from "./WhiteKey";

export default function Octave(props) {
  // const [width, setWidth] = useState(props.width)
  const [key, setKey] = useState("C");
  const [whiteKeys, setWhiteKeys] = useState(
    ["C", "D", "E", "F", "G", "A", "B"]);
  const [blackKeys, setBlackKeys] = useState(
    {
      sharps: ["C♯", "D♯", "F♯", "G♯", "A♯"], 
      flats: ["D♭", "E♭", "G♭", "A♭", "B♭"]
    })

  return (
    <div id="piano" style={{width: props.width + "px"}}>
      {
      whiteKeys.map(each => {
        return <WhiteKey key={each} myKey={each}></WhiteKey>;
      })
      }
      {
      blackKeys.sharps.map(each => {
        return <BlackKey key={each} myKey={each} id="black"></BlackKey>;
      })
      }
      
    </div>
  );
}
