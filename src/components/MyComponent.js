import React from "react";
class MyComponent extends React.Component {
    state = {
        name: 'Quyen',
        age: 20,
        address: 'Ha Noi'
    }
    handleClick = (event) => {
        console.log('Click me');
        console.log('My name is ', this.state.name)
    }
    handleOnMouseOver = (event) => {
        console.log(event.clientX);
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onMouseOver={this.handleOnMouseOver}>Hover Me</button>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}

export default MyComponent;