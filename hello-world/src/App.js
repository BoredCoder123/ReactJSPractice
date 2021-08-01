import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      <Message />
      {/* <Greet name='Ankit' heroName='h1'><p>Child prop</p></Greet>

      <Greet name='Ankit2' heroName='h2'>
        <button>Action</button>
      </Greet>

      <Greet name='Ankit3' heroName='h3'></Greet>
      <Welcome name='Ankit' heroName='h1'/>
      <Welcome name='Ankit2' heroName='h2'/> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
