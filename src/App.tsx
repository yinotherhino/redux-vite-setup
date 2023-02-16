import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
//import actions from the reducer
import { decrement, increment, incrementByAmount } from "./redux/reducers/counter";

function App() {

  const { value } = useAppSelector((state) => state.counter);
  //or
  //const value = useSelector((state:RootState) => state.counter.value);

  //dispatch for modifying state
  const dispatch = useAppDispatch();

  const [incrementBy, setIncrementBy] = useState(0)

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())} >--</button>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>++</button>
      <p >increment by value: <input type="number" name="increment" onChange={(e)=>setIncrementBy(Number(e.target.value))} /></p>
      <button onClick={()=> dispatch(incrementByAmount(incrementBy))}>increment by {incrementBy}</button>
    </div>
  );
}

export default App;
