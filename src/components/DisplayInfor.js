import React from "react";
import './DisplayInfor.scss';
import Logo from './../logo.svg';
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
                <img src={Logo} />
                <div>
                    <span onClick={() => this.handleShowHide()}>
                        {this.state.isShowListUser ? "Hide List User" : "Show List User"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "blue" : "red"}>
                                    <div>My Name's {user.name}</div>
                                    <div>My Age's {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        )
    }
}
export default DisplayInfor;