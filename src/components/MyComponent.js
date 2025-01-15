import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'Hoi Dan IT', age: 20 },
            { id: 2, name: 'Eric', age: 30 },
            { id: 3, name: 'Dao Quyen', age: 21 }
        ]
    }
    render() {
        return (
            <div>
                <UserInfor />
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