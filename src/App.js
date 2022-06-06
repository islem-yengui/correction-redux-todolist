import logo from './logo.svg';
import './App.css';

import ListTask from './components/ListTask';
import AddTask from './components/AddTask';
import Task from './components/Task';

function App() {
  
  return (
    <div className="App">
      <AddTask/>
      <ListTask />
     {/* <Task/> */}
    </div>
  );
}

export default App;