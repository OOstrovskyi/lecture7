import React from "react";
import {emojify} from 'react-emojione';

const users = [
    {
      key: 1,
      name: 'Joe',
      isAdmin: true
    },
    {
      key: 2,
      name: 'Kolia',
      isAdmin: false
    },
    {
      key: 3,
      name: 'Vlad',
      isAdmin: true
    },
    {
      key: 4,
      name: 'Sergey',
      isAdmin: true
    },
    {
      key: 5,
      name: 'Kolawole',
      isAdmin: false
    },
    {
      key: 6,
      name: 'Bill Gates',
      isAdmin: false
    },
  ];
  
  const User = (props) => <p>{props.name}{ props.isAdmin ? (emojify('👑')) : ('') }</p>
  
  export default class Users extends React.Component {
    render() {
      return (
        <div>
          <h2>User List</h2>
          {users.map((el) => <User key={el.key} name={el.name} isAdmin={el.isAdmin} />)}
        </div>
      )
    }
  }