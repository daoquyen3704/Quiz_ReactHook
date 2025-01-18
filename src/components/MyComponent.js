import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

const MyComponent = () => {
    const [listUsers, setListUser] = useState([{ id: 1, name: 'Hoi Dan IT', age: '16' },
    { id: 2, name: 'Eric', age: '20' },
    { id: 3, name: 'Dao Quyen', age: '21' }])

    const handleAddNewUser = (userObj) => {
        setListUser([userObj, ...listUsers])
    }
    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers.filter(item => item.id !== userId);
        setListUser(listUsersClone)
    }
    return (
        <>
            <div className="a">
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}
                />
                <br /><br />
                <DisplayInfor
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className="b">

            </div>
        </>
    )
}
export default MyComponent;