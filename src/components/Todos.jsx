import { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            title: '',
        };
    }

    async componentDidMount() {
        const res = await axios.get('https://api-todos-0ylw.onrender.com/api/v1/todos');
        this.setState({ todos: res.data });
    }
    handleAdd = async (e, data) => {
        e.preventDefault();
        const { title, des } = data.state;
        if (title && des) {
            const newTodo = {
                title,
                description: des,
                completed: false,
            };
            const response = await axios.post('https://api-todos-0ylw.onrender.com/api/v1/todos', {
                ...newTodo,
            });
            const data = [...this.state.todos, response.data];
            this.setState({ todos: data });
            toast.success('Create todo successfully');
        } else {
            alert('Title and description is required');
        }
        data.setState({ title: '', des: '' });
    };
    handleToggle = async (id) => {
        const findTodo = this.state.todos.find((todo) => todo._id === id);
        const { title, description } = findTodo;
        await axios.put(`https://api-todos-0ylw.onrender.com/api/v1/todos/${id}`, {
            title,
            description,
            completed: !findTodo.completed,
        });
        const dataToggle = this.state.todos.map((todo) => {
            if (todo._id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({ todos: dataToggle });
        toast.success('Update todo successfully');
    };
    handleDelete = async (id) => {
        await axios.delete(`https://api-todos-0ylw.onrender.com/api/v1/todos/${id}`);
        const dataUpdate = this.state.todos.filter((todo) => todo._id !== id);
        this.setState({ todos: dataUpdate });
        toast.success('Delete todo successfully');
    };
    render() {
        return (
            <>
                <h1>Todos</h1>
                {/* Example using pure component */}
                {/* <input
                    value={this.state.title}
                    type="text"
                    onChange={(e) => this.setState({ title: e.target.value })}
                /> */}
                <TodoForm onAdd={this.handleAdd} />
                {this.state.todos &&
                    this.state.todos.map((todo) => {
                        return (
                            <TodoItem
                                key={todo._id}
                                todo={todo}
                                onToggle={this.handleToggle}
                                onDelete={this.handleDelete}
                            />
                        );
                    })}
            </>
        );
    }
}

export default Todos;
