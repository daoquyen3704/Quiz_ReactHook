import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {

    render() {
        const myInfor = ['abc', 'cde', 'd'];
        return (
            <div>
                <UserInfor />
                <br />
                <br />
                <DisplayInfor name="Đào Duy Quyền" age="20" />
                <hr />
                <DisplayInfor name="hihi" age={21} myInfor={myInfor} />

            </div>
        );
    }
}

export default MyComponent;