import './App.css';
import React from 'react';
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


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
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

      <CounterOne></CounterOne>

    </div>
  );
}

export default App;
