import { FaPlus } from 'react-icons/fa';

interface TodoFormProps {
    todo: string;
    setTodo: (todo: string) => void;
    priority: string;
    setPriority: (priority: string) => void;
    tag: string;
    setTag: (tag: string) => void;
    addTodo: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ todo, setTodo, priority, setPriority, tag, setTag, addTodo }) => {
    return (
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
            <input
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="Tag (optional)"
                className="form-control me-2 mb-2 mb-sm-0"
                style={{ borderRadius: '5px' }}
            />
            <button onClick={addTodo} className="btn btn-primary w-100 w-sm-auto" style={{ borderRadius: '5px' }}>
                <FaPlus />
            </button>
        </div>
    );
};

export default TodoForm;
