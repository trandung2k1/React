import { PureComponent } from 'react';
class TodoForm extends PureComponent {
    constructor(props) {
        super(props);
    }
    state = {
        title: '',
        des: '',
    };
    render() {
        console.log('Render and re-render');
        return (
            <>
                <form onSubmit={(e) => this.props.onAdd(e, this)}>
                    <div>
                        <label>Title: </label>
                        <br />
                        <input
                            style={{ padding: '10px', width: '300px' }}
                            value={this.state.title}
                            onChange={(e) => this.setState({ title: e.target.value })}
                            type="text"
                            placeholder="Enter title"
                        />
                    </div>
                    <div>
                        <label>Description: </label>
                        <br />
                        <input
                            style={{ padding: '10px', width: '300px' }}
                            value={this.state.des}
                            onChange={(e) => this.setState({ des: e.target.value })}
                            type="text"
                            placeholder="Enter description"
                        />
                    </div>
                    <br />
                    <button style={{ background: 'green', color: 'white' }}>Add</button>
                </form>
            </>
        );
    }
}

export default TodoForm;
