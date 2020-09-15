import React from 'react';
import Todo from './Todo';

const TodoList = ({ filteredTodos, todos, setTodos }) => {

    return (
        <div className="todo-container">
          <ul className="todo-list">
            {filteredTodos.map((todo) => (
              <Todo 
                text={todo.text} 
                key={todo.id} 
                setTodos={setTodos} 
                todo={todo}
                todos={todos} />
            ))}
          </ul>
        </div>
    );
}

export default TodoList;