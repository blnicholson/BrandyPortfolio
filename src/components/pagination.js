import React from 'react'
import './pagination.css'
import Pods from "../test.json"

class TodoApp extends React.Component {
    constructor() {
      super();
      this.state = {
        todos: Pods,
        currentPage: 1,
        todosPerPage: 8
      };
      this.handleClick = this.handleClick.bind(this);
      console.log(Pods)
    }

    handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id),
      });
    }

    render() {
      const { todos, currentPage, todosPerPage } = this.state;

      // Logic for displaying current todos
      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

      const renderTodos = currentTodos.map((todo, index) => {
        return <li key={index}>{todo.name} <br/>
                <img src = {todo.image} alt = {todo.alt}/>
        </li>;
      });

      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </li>
        );
      });

      return (
        <div>
          <ul>
            {renderTodos}
          </ul>
          <ul id="page-numbers">
            {renderPageNumbers}
          </ul>
        </div>
      );
    }
  }


  








 
export default TodoApp
