import { useState, useEffect } from 'react';
import { FaPlus, FaTrash, FaCheckCircle, FaExclamationCircle, FaExclamationTriangle, FaCircle } from 'react-icons/fa'; // Ikon yang akan digunakan

function App() {
  const [todo, setTodo] = useState<string>('');
  const [priority, setPriority] = useState<string>('Rendah');
  const [todos, setTodos] = useState<{ text: string; priority: string; completed: boolean }[]>([]);
  const [alert, setAlert] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<'success' | 'danger'>('danger');

  // Menyimpan data ke localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Fungsi untuk menambah todo
  const addTodo = () => {
    if (!todo) {
      setAlert('Todo cannot be empty!');
      setAlertType('danger');
      setTimeout(() => setAlert(null), 3000);
      return;
    }
    const newTodo = { text: todo, priority, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo('');
    setPriority('Rendah');
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setAlert('Todo successfully added!');
    setAlertType('success');
    setTimeout(() => setAlert(null), 3000);
  };

  // Fungsi untuk menghapus todo
  const removeTodo = (index: number) => {
    if (!todos[index]) {
      setAlert('Todo not found!');
      setAlertType('danger');
      setTimeout(() => setAlert(null), 3000);
      return;
    }
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setAlert('Todo successfully deleted!');
    setAlertType('success');
    setTimeout(() => setAlert(null), 3000);
  };

  // Fungsi untuk menandai todo sebagai selesai
  const markCompleted = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setAlert(newTodos[index].completed ? 'Todo marked as completed!' : 'Todo marked as incomplete!');
    setAlertType('success');
    setTimeout(() => setAlert(null), 3000);
  };

  // Menentukan ikon berdasarkan prioritas
  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'Tinggi':
        return <FaExclamationCircle style={{ color: 'red' }} />;
      case 'Sedang':
        return <FaExclamationTriangle style={{ color: 'yellow' }} />;
      case 'Rendah':
        return <FaCircle style={{ color: 'green' }} />;
      default:
        return null;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light py-5">
        <div className="card shadow-lg p-4 w-100 w-sm-75 w-md-50" style={{ maxWidth: '500px' }}>
          <h1 className="text-center text-primary mb-4">To-Do List</h1>

          {/* Alert */}
          {alert && (
            <div className={`alert alert-${alertType} mb-3 animate__animated animate__fadeInUp`} role="alert">
              {alert}
            </div>
          )}

          {/* Form untuk menambah todo */}
          <div className="d-flex flex-column flex-sm-row mb-3">
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Add a new todo"
              className="form-control me-2 mb-2 mb-sm-0"
              style={{ borderRadius: '5px' }}
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="form-select me-2 mb-2 mb-sm-0"
              style={{ borderRadius: '5px' }}
            >
              <option value="Rendah">Rendah</option>
              <option value="Sedang">Sedang</option>
              <option value="Tinggi">Tinggi</option>
            </select>
            <button
              onClick={addTodo}
              className="btn btn-primary w-100 w-sm-auto"
              style={{ borderRadius: '5px' }}
            >
              <FaPlus />
            </button>
          </div>

          {/* List Todo */}
          <ul className="list-group">
            {todos
              .sort((a, b) => {
                // Menyortir berdasarkan prioritas
                const priorities = { Rendah: 1, Sedang: 2, Tinggi: 3 };
                return priorities[b.priority as keyof typeof priorities] - priorities[a.priority as keyof typeof priorities];
              })
              .map((todo, index) => (
                <li
                  key={index}
                  className={`list-group-item d-flex justify-content-between align-items-center mb-2 shadow-sm ${todo.completed ? 'bg-success text-white' : ''}`}
                  style={{
                    borderRadius: '10px',
                    backgroundColor: '#f8f9fa',
                    borderColor: '#dee2e6',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <span
                    style={{
                      textDecoration: todo.completed ? 'line-through' : 'none',
                    }}
                  >
                    {todo.text}
                    <span className="ms-2">
                      {getPriorityIcon(todo.priority)} {/* Menampilkan ikon berdasarkan prioritas */}
                    </span>
                  </span>
                  <div>
                    <button
                      onClick={() => markCompleted(index)}
                      className="btn btn-success btn-sm me-2"
                      style={{
                        borderRadius: '5px',
                        padding: '0.5rem',
                      }}
                    >
                      <FaCheckCircle />
                    </button>
                    <button
                      onClick={() => removeTodo(index)}
                      className="btn btn-danger btn-sm"
                      style={{
                        borderRadius: '5px',
                        padding: '0.5rem',
                      }}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-grey py-3 mt-auto text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} <span>Urproject Studio</span>. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
