import React, { useState } from "react";
import './DisplayInfor.scss';

const DisplayInfor = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide List User" : "Show List User"}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <>
                                <div key={user.id} className={+user.age > 18 ? "blue" : "red"}>
                                    <div>My Name's {user.name}</div>
                                    <div>My Age's {user.age}</div>

                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </>
                        )
                    })}
                </>
            }
        </div>
    )
}
export default DisplayInfor;