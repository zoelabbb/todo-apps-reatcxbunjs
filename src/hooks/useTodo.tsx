import { useState, useEffect } from 'react';

interface Todo {
    text: string;
    priority: string;
    tag: string;
    completed: boolean;
}

const useTodo = () => {
    const [todo, setTodo] = useState<string>('');
    const [priority, setPriority] = useState<string>('Rendah');
    const [tag, setTag] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([]);
    const [alert, setAlert] = useState<string | null>(null);
    const [alertType, setAlertType] = useState<'success' | 'danger'>('danger');

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
        if (savedTodos) {
            setTodos(savedTodos);
        }
    }, []);

    const addTodo = () => {
        if (!todo) {
            setAlert('Todo cannot be empty!');
            setAlertType('danger');
            setTimeout(() => setAlert(null), 3000);
            return;
        }
        const newTodo: Todo = { text: todo, priority, tag, completed: false };
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
        setTodo('');
        setPriority('Rendah');
        setTag('');
        localStorage.setItem('todos', JSON.stringify(newTodos));
        setAlert('Todo successfully added!');
        setAlertType('success');
        setTimeout(() => setAlert(null), 3000);
    };

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

    const markCompleted = (index: number) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
        setAlert(newTodos[index].completed ? 'Todo marked as completed!' : 'Todo marked as incomplete!');
        setAlertType('success');
        setTimeout(() => setAlert(null), 3000);
    };

    return { todo, setTodo, priority, setPriority, tag, setTag, todos, addTodo, removeTodo, markCompleted, alert, alertType };
};

export default useTodo;