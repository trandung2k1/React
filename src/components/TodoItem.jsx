import { Component } from 'react';
class TodoItem extends Component {
    constructor(props) {
        super(props);
    }
    state = {};
    render() {
        return (
            <>
                <h2 style={{ textDecoration: this.props.todo.completed ? 'line-through' : 'none' }}>
                    {this.props.todo.id} - {this.props.todo.title}
                </h2>
                <button
                    style={{ background: 'blue', color: 'white' }}
                    onClick={() => this.props.onToggle(this.props.todo.id)}
                >
                    Toggle
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                    style={{ background: 'red', color: 'white' }}
                    onClick={() => this.props.onDelete(this.props.todo.id)}
                >
                    Delete
                </button>
            </>
        );
    }
}

export default TodoItem;
