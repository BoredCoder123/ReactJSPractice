import './App.css';
import React, {useReducer} from 'react';
import ComponentC from './Components/ComponentC';
import DataFetching from './Components/DataFetching';
import HookCounter from './Components/HookCounter';
import HookCounter2 from './Components/HookCounter2';
import HookCounter3 from './Components/HookCounter3';
import HookCounter4 from './Components/HookCounter4';
import HookCounter5 from './Components/HookCounter5';
import HookMouse from './Components/HookMouse';
import IntervalHookCounter from './Components/IntervalHookCounter';
import MouseContainer from './Components/MouseContainer';
import CounterOne from './Components/CounterOne';
import CounterTwo from './Components/CounterTwo';
import CounterThree from './Components/CounterThree';
import ComponentB2 from './Components/ComponentB2';
import ComponentA2 from './Components/ComponentA2';
import ComponentF2 from './Components/ComponentF2';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
    <div className="App">
      {/* <HookCounter></HookCounter> */}

      {/* <HookCounter2></HookCounter2> */}

      {/* <HookCounter3></HookCounter3> */}

      {/* <HookCounter4></HookCounter4> */}

      {/* <HookCounter5></HookCounter5> */}

      {/* <HookMouse></HookMouse> */}

      {/* <MouseContainer></MouseContainer> */}

      {/* <IntervalHookCounter></IntervalHookCounter> */}

      {/* <DataFetching></DataFetching> */}

      {/* <UserContext.Provider value={'Ankit'}>
        <ChannelContext.Provider value={'Ankit2'}>
          <ComponentC></ComponentC>
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <CounterOne></CounterOne> */}
      {/* <CounterTwo></CounterTwo> */}

      {/* <CounterThree></CounterThree> */}
      <div>{count}</div>
      <ComponentA2></ComponentA2>
      <ComponentB2></ComponentB2>
      <ComponentF2></ComponentF2>

    </div>
    </CountContext.Provider>
  );
}

export default App;
