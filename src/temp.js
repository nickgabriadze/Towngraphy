import React, { useState, useEffect, useReducer } from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Timer initialTotalSeconds={3600} />
    </div>
  );
}

// function Timer({ initialTotalSeconds }) {
//   const [hour, setHour] = useState(Math.floor(initialTotalSeconds / 3600));
//   const [minute, setMinute] = useState(
//     Math.floor((initialTotalSeconds % 3600) / 60)
//   );
//   const [second, setSecond] = useState(initialTotalSeconds % 60);

//   useEffect(() => {
//     console.log("start use Effect");

//     const id = setInterval(() => {
//       console.log("set interval");
//       if (second) {
//         setSecond(second - 1);
//       } else if (minute) {
//         setMinute(minute - 1);
//         setSecond(59);
//       } else if (hour) {
//         console.log("if 3");
//         setHour(hour - 1);
//         setMinute(59);
//         setSecond(59);
//       }
//     }, 1000);

//     return () => {
//       console.log("end use Effect");
//       clearInterval(id);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>
//         {hour} {minute} {second}
//       </h1>
//     </div>
//   );
// }

function Timer({ initialTotalSeconds }) {
  const [state, dispatch] = useReducer(reducer, {
    hour: Math.floor(initialTotalSeconds / 3600),
    minute: Math.floor((initialTotalSeconds % 3600) / 60),
    second: initialTotalSeconds % 60
  });

  const { hour, minute, second } = state;

  useEffect(() => {
    console.log("start use Effect");
    const id = setInterval(dispatch, 1000);
    return () => {
      console.log("clear interrval");
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>
        {hour} {minute} {second}
      </h1>
    </div>
  );
}

function reducer(state) {
  const { hour, minute, second } = state;

  if (second) {
    return { ...state, second: second - 1 };
  } else if (minute) {
    return { ...state, minute: minute - 1, second: 59 };
  } else if (hour) {
    return { hour: hour - 1, minute: 59, second: 59 };
  } else {
    return state;
  }
}

export default App;
