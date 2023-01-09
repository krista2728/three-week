
import './App.css';
import image from './gens.jpg';
import { ToDoList } from './ToDoList';
import imageTwo from './todolist.jpg';

function App() {
  return (
    <div className='app'>
    <div className="container">
      <img src = {image} width="250px" alt="gens" />
      </div>
<div className="container">
      <h1>To Do List:</h1>
      </div>

      <ToDoList />

      <div className="container">
      <img className="container" src = {imageTwo} width="250px" alt="todolist" />
      </div>
    </div>
  );
}

export default App;
