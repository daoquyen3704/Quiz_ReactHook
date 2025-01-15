import React from "react";
import UserInfor from "./UserInfor";
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

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <div>My name is {this.state.name} and i'm {this.state.age}</div>
                <UserInfor />
            </div>
        );
    }
}

export default MyComponent;