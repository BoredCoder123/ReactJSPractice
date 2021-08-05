import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table'
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User'
import Counter from './components/Counter'
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <div className="App">
      {/* <Form></Form> */}

      {/* <LifecycleA /> */}

      {/* <FragmentDemo></FragmentDemo> */}

      {/* <Table></Table> */}

      {/* <ParentComp></ParentComp> */}

      {/* <RefsDemo></RefsDemo> */}

      {/* <FocusInput></FocusInput> */}

      {/* <FRParentInput></FRParentInput> */}

      {/* <ErrorBoundary>
      <Hero heroName='Batman'></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName='superman'></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName='Joker'></Hero>
      </ErrorBoundary> */}

      {/* <ClickCounter name='Ankit'></ClickCounter>
      <HoverCounter></HoverCounter> */}

      {/* <ClickCounter2></ClickCounter2>
      <HoverCounter2></HoverCounter2>
      <User render={(isLoggedIn)=> isLoggedIn ? 'Ankit' : 'Guest'}></User> */}

      {/* <Counter 
        render={(count, incrementCount)=>(
          <ClickCounter2 count={count} incrementCount={incrementCount}></ClickCounter2>
        )}></Counter>

        <Counter 
        render={(count, incrementCount)=>(
          <HoverCounter2 count={count} incrementCount={incrementCount}></HoverCounter2>
        )}></Counter> */}

        <UserProvider value='Ankit'>
          <ComponentC></ComponentC>
        </UserProvider>
    </div>
  );
}

export default App;
