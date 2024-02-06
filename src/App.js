import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { text: "lorem 1", completed: true },
  { text: "lorem 2", completed: false },
  { text: "lorem 3", completed: false },
  { text: "lorem 4", completed: false },
  { text: "lorem 5", completed: false },
  { text: "lorem 6", completed: false },
  { text: "lorem 7", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
        {[<TodoCounter />, <TodoList />]}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
