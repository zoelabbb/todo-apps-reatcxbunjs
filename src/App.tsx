import Alert from './components/Alert';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import useTodo from './hooks/useTodo';

function App() {
  const { todo, setTodo, priority, setPriority, tag, setTag, todos, addTodo, removeTodo, markCompleted, alert, alertType } = useTodo();

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light py-5">
        <div className="card shadow-lg p-4 w-100 w-sm-75 w-md-50" style={{ maxWidth: '500px' }}>
          <h1 className="text-center text-primary mb-4">To-Do List</h1>
          <Alert message={alert || ''} type={alertType} />
          <TodoForm
            todo={todo} setTodo={setTodo}
            priority={priority} setPriority={setPriority}
            tag={tag} setTag={setTag}
            addTodo={addTodo}
          />
          <TodoList todos={todos} markCompleted={markCompleted} removeTodo={removeTodo} />
        </div>
      </div>
      <footer className="text-grey py-3 mt-auto text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} <span>Urproject Studio</span>. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;