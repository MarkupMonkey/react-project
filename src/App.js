import './App.css';
let hello = <h1>Hello, World!</h1>

function App(name) {
  // name = 'User'; // if 'name' isn't passed to function nothing will be rendered and console says errors
  return (
    <h1>Hello, {name}</h1>
  );
}

export default App;
