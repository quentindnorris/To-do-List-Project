import React from 'react'
import { ITask } from "../Interfaces";

interface Props {
    task: ITask; //making a prop optional by giving it a ? task?:
    completeTask(taskNameToDelete: String): void; //to call a function in a prop, name the function and then its return type 
}

//the span HTML element is an generic inline container for phrasing content 
//similar to <div>, however <div> is a block element while <span> is inline 
const TodoTask = ({ task, completeTask }: Props) => {
    return (
      <div className="task">
        <div className="content">
          <span>{task.taskName}</span>
          <span>{task.deadline}</span>
        </div>
        <button
          onClick={() => {
            completeTask(task.taskName);
          }}
        >
          X
        </button>
      </div>
    );
  };
  
  export default TodoTask;