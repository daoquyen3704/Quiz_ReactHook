import React from "react";
import './DisplayInfor.scss';
class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        // destructuring array/obj
        const { listUsers } = this.props;
        return (
            <div className="display-infor-container">
                <div>
                    <span onClick={() => this.handleShowHide()}>
                        {this.state.isShowListUser ? "Hide List User" : "Show List User"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user, index) => {
                            return (
                                <>
                                    <div key={user.id} className={+user.age > 18 ? "blue" : "red"}>
                                        <div>My Name's {user.name}</div>
                                        <div>My Age's {user.age}</div>

                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
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
}
export default DisplayInfor;