import { FaTrash, FaCheckCircle, FaExclamationCircle, FaExclamationTriangle, FaCircle, FaTag } from 'react-icons/fa';

interface Todo {
    text: string;
    priority: string;
    tag: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    markCompleted: (index: number) => void;
    removeTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, markCompleted, removeTodo }) => {
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
        <ul className="list-group">
            {todos
                .sort((a, b) => {
                    const priorities = { Rendah: 1, Sedang: 2, Tinggi: 3 };
                    return priorities[b.priority as keyof typeof priorities] - priorities[a.priority as keyof typeof priorities];
                })
                .map((todo, index) => (
                    <li
                        key={index}
                        className={`list-group-item d-flex justify-content-between align-items-center mb-2 shadow-sm ${todo.completed ? 'bg-success text-white' : ''
                            }`}
                        style={{
                            borderRadius: '10px',
                            backgroundColor: '#f8f9fa',
                            borderColor: '#dee2e6',
                            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <div>
                            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                {todo.text}
                                <span className="ms-2">{getPriorityIcon(todo.priority)}</span>
                                {todo.tag && (
                                    <span className="badge bg-secondary ms-2">
                                        <FaTag className="me-1" />
                                        {todo.tag}
                                    </span>
                                )}
                            </span>
                        </div>
                        <div>
                            <button
                                onClick={() => markCompleted(index)}
                                className="btn btn-success btn-sm me-2"
                                style={{ borderRadius: '5px', padding: '0.5rem' }}
                            >
                                <FaCheckCircle />
                            </button>
                            <button
                                onClick={() => removeTodo(index)}
                                className="btn btn-danger btn-sm"
                                style={{ borderRadius: '5px', padding: '0.5rem' }}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </li>
                ))}
        </ul>
    );
};

export default TodoList;
