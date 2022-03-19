import React, { FC, ChangeEvent, useState } from 'react'; //useState is a hook 
import './App.css';
import {ITask} from './Interfaces'
import TodoTask from './Components/TodoTask';

//all of our components, like App or TodoTask have props that we can pass to them
//just like how we can pass them to an html element 
const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]); //passing useState function as an empty array 
//todoList = all of the toDos in our toDo state
//setTodoList = the function we call to update our todos
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => { // called whenever there is change in our inputs 
    if (event.target.name == "task") {
      setTask(event.target.value);
    } else { 
    setDeadline(Number(event.target.value));
    }
  
  };
  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline}; // this is an object 
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);

  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
  <div className="App">
   <div className="header">
     <div className="inputContainer">
      <input 
        type="text" 
        placeholder="Task..." 
        name="task" 
        value={task} //ensures value is kept when button is clicked
        onChange={handleChange} />
      <input 
        type="number" 
        placeholder="Deadline (in Days)..." 
        name="deadline" 
        value={deadline} // ensures value is kept when button is clicked 
        onChange={handleChange} />
      </div>
    <button onClick={addTask}>Add Task</button>
   </div>
    <div className="todoList"></div>
      {todoList.map((task: ITask, key: number) => {  //maps through every element in the list and displays it on the screen
        return <TodoTask key={key} task={task} completeTask={completeTask}/>; // we assigned the key value above to relate it to a key-value pair 
//the key represents the rendering of the elements that change 
//it allows react to re-render or change the componenets that change in an array 

      })}
  </div>
  );
  };


export default App;
