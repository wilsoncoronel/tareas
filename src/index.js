// import { TodoList } from './classes/todo-list.class';
// import { Todo } from './classes/todo.class';
import {Todo, TodoList} from './classes';
import { crearTodoHtml} from './js/componentes';
import './styles.css';
export const todoList = new TodoList();
todoList.todos.forEach(crearTodoHtml);
// const newTodo  = new Todo('aprender js');
// todoList.nuevoTodo(newTodo);