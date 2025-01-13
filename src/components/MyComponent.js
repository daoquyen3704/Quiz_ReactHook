import React from "react";
class MyComponent extends React.Component {
    state = {
        name: 'Quyen',
        age: 20,
        address: 'Ha Noi'
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}

            </div>
        );
    }
}

export default MyComponent;