import React from "react";

class DisplayInfor extends React.Component {
    render() {
        // destructuring array/obj
        const { listUsers } = this.props;
        return (
            <div>
                {listUsers.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <div>My Name's {user.name}</div>
                            <div>My Age's {user.age}</div>
                            <hr />
                        </div>
                    )
                })}
                {/* <div>My Name's {name}</div>
                <div>My Age's {age}</div>
                <hr />
                <div>My Name's {name}</div>
                <div>My Age's {age}</div>
                <hr />
                <div>My Name's {name}</div>
                <div>My Age's {age}</div> */}
            </div>
        )
    }
}
export default DisplayInfor;