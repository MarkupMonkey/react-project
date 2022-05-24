import './App.css';
let hello = <h1>Hello, World!</h1>

function App(name) {
  name = <h1>User</h1> //if the `name` variable contains a JSX expression instead of a string <h1> cannot appear as a child of <h1>.
  return (
    <h1>Hello, {name}</h1>
  );
}

export default App;
