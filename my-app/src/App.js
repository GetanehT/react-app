import React from 'react'; // Ensure React is imported
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!"  name ="mike" age="32" greet="I see you're" old="old;" />

    </div>
  );
}

export default App;
