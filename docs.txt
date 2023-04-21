import { Component } from 'react';
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Dung',
            count: 1,
            todos: [],
            date: new Date(),
            color: 'red',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    //Default props
    static defaultProps = {
        msg: 'Hi',
    };

    // method is called right before rendering the element(s) in the DOM.
    static getDerivedStateFromProps(props, state) {
        // console.log(props, state);
        return state;
    }
    // The render() method is required, and is the method that actually outputs the HTML to the DOM.
    componentDidMount() {
        console.log('After component mounted');
        // fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        //     .then((res) => res.json())
        //     .then((data) => this.setState({ todos: data }));
        // this.timer = setInterval(() => {
        //     this.setState({ date: new Date() });
        // }, 1000);
        // setTimeout(() => {
        //     this.setState({ color: 'yellow' });
        // }, 2000);
    }

    //C1: Arrow function
    // handleClick = () => {
    //     this.setState({
    //         count: this.state.count + 1,
    //     });
    // };
    //C2: this.handleClick = this.handleClick.bind(this);
    handleClick() {
        // this.setState({
        //     count: this.state.count + 1,
        // });
        this.forceUpdate(); //skipping the shouldComponentUpdate() method.
    }
    //C3: onClick={() => this.handleClick()}

    //Called immediately before a component is destroyed
    componentWillUnmount() {
        // clearInterval(this.timer);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // document.getElementById('div1').innerHTML =
        //     'Before the update, the favorite was ' + prevState.color;
        console.log(prevState.count);
        return {};
    }

    //Called immediately after updating
    componentDidUpdate() {
        console.log('Update state');
        // document.getElementById('div2').innerHTML = 'The updated favorite is ' + this.state.color;
    }

    shouldComponentUpdate() {
        // return false;
        return true;
    }

    render() {
        return (
            <div className="App">
                <h1>Hello</h1>
                <h2>{this.state.name}</h2>
                <h2>{this.state.count}</h2>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
                {/* <h1>My Favorite Color is {this.state.color}</h1> */}
                {/* <div id="div1"></div>
                <div id="div2"></div> */}
                <h1>{this.props.msg}</h1>
                <h3>Random Number: {Math.random()}</h3>
                <button onClick={this.handleClick}>Increase</button>
            </div>
        );
    }
}

export default App;
