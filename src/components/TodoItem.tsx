import { FaTrash } from 'react-icons/fa';

interface TodoItemProps {
    index: number;
    todo: string;
    onRemove: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ index, todo, onRemove }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {todo}
            <button onClick={() => onRemove(index)} className="btn btn-danger btn-sm">
                <FaTrash />
            </button>
        </li>
    );
};

export default TodoItem;
