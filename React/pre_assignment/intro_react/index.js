// select root div
const domContainer = document.querySelector("#root");
// create the root of react dom
const root = ReactDOM.createRoot(domContainer);

// render what we see
setTimeout(() => {
    root.render(React.createElement("h1", {}, "Test First React has rendered"));
}, 5000);

// ExampleButton component
class ExampleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isCLicked: false };
    }
    render() {
        if (this.state.isCLicked) {
            return 'You clicked this';
        }
        return React.createElement(
            'button',
            { onClick: () => this.setState({ isCLicked: true }) },
            'Click me!'
        );
    }
}

// selecting the root and render the 'ExampleButton' components we defined.
setTimeout(() => {
    root.render(React.createElement(ExampleButton));
}, 6000);


