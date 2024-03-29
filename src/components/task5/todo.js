import React from "react";
import "./style.css";

const todos = [
    {
      key: 1,
      status: 'start',
      text: 'Learn english'
    },
    {
      key: 2,
      status: 'done',
      text: 'Watch a new movie'
    },
    {
      key: 3,
      status: 'inProgress',
      text: 'Make a post on Instagram'
    },
    {
      key: 4,
      status: 'done',
      text: 'Learn React'
    },
    {
      key: 5,
      status: 'inProgress',
      text: 'Do home task'
    },
    {
      key: 6,
      status: 'start',
      text: 'Go shopping'
    },
  ];

   
  const Todo = (props) => (   
    <p className={props.status}>{props.text}</p> 
  )
  
  export default class TodoList extends React.Component {
    render() {
      return (
        <div>
          <h2>Todo</h2>
          {
             todos.map((el)=> <Todo key={el.key} status={el.status} text={el.text} />)    
          }
        </div>
      )
    }
  }
  