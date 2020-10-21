import React, { useState } from 'react';
import Wad from 'web-audio-daw';

const Main = () => {
  const [saw, setSaw] = useState(new Wad({
    source: 'triangle',
    volume: .2,
    tuna: {
      Overdrive: {
        outputGain: 0.3,         //0 to 1+
        drive: 0.3,              //0 to 1
        curveAmount: 1,          //0 to 1
        algorithmIndex: 5,       //0 to 5, selects one of our drive algorithms
        bypass: 0
      },
      Chorus: {
        intensity: 0.3,  //0 to 1
        rate: 4,         //0.001 to 8
        stereoPhase: 0,  //0 to 180
        bypass: 0
      }
    },
    // compressor: {
    //   attack: .003, // The amount of time, in seconds, to reduce the gain by 10dB. This parameter ranges from 0 to 1.
    //   knee: 30,   // A decibel value representing the range above the threshold where the curve smoothly transitions to the "ratio" portion. This parameter ranges from 0 to 40.
    //   ratio: 12,   // The amount of dB change in input for a 1 dB change in output. This parameter ranges from 1 to 20.
    //   release: .25,  // The amount of time (in seconds) to increase the gain by 10dB. This parameter ranges from 0 to 1.
    //   threshold: -24,  // The decibel value above which the compression will start taking effect. This parameter ranges from -100 to 0.
    // }
  }));

  const handlePlay = (ref) => {
    console.log('clicked Play');
    saw.play({ pitch: 'B4', label: 'B4' });
  };
  const handleStop = (ref) => {
    console.log('clicked Stop');
    saw.stop('B4');
  };

  return (
    <div>
      <button onClick={(ref) => handlePlay(ref)}>Play</button>
      <button onClick={(ref) => handleStop(ref)}>Stop</button>
    </div>
  );
};

export default Main;
