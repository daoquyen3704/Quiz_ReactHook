import React from "react";
class MyComponent extends React.Component {
    state = {
        name: 'Quyen',
        age: 20,
        address: 'Ha Noi'
    }
    handleClick = (event) => {
        console.log('Click me');
        console.log('Random ', Math.floor(Math.random() * 100) + 1);

        this.setState({
            name: 'Eric',
            age: Math.floor(Math.random() * 100) + 1
        })
    }
    handleOnMouseOver = (event) => {
        // console.log(event.clientX);
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <button onMouseOver={this.handleOnMouseOver}>Hover Me</button>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}

export default MyComponent;