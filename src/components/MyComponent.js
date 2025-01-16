import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'Hoi Dan IT', age: '16' },
            { id: 2, name: 'Eric', age: '20' },
            { id: 3, name: 'Dao Quyen', age: '21' }
        ]
    }
    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    render() {
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}

                />
                <br />
                <br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />


            </div>
        );
    }
}

export default MyComponent;