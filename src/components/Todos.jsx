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
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3');
        this.setState({ todos: res.data });
    }
    handleAdd = (e, data) => {
        e.preventDefault();
        const { title, des } = data.state;
        if (title) {
            const newTodo = {
                id: Math.floor(Math.random() * 1000000 - 1),
                title,
                completed: false,
                userId: 1,
            };
            const data = [newTodo, ...this.state.todos];
            this.setState({ todos: data });
        }
        data.setState({ title: '', des: '' });
    };
    handleToggle = (id) => {
        const dataToggle = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({ todos: dataToggle });
        toast.success('Update todo successfully');
    };
    handleDelete = (id) => {
        const dataUpdate = this.state.todos.filter((todo) => todo.id !== id);
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
                                key={todo.id}
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
