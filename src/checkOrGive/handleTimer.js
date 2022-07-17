import {useState} from 'react';

export function HandleTimer(started) {
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(20);
  
    let formattedMinute = minutes > 9 ? minutes : `0${minutes}`
    let formattedSecond = seconds > 9 ? seconds : `0${seconds}`
  
    const timer = setInterval(() => {
      clearInterval(timer);
      if (started === true) {
        if (seconds === 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          setSeconds(seconds - 1)
  
        }
        if (seconds === 0 & minutes === 0) {
          setSeconds(0);
          setMinutes(0);
          started = false
        }
      }
    }, 100)
  
    return [formattedMinute, formattedSecond]
  }