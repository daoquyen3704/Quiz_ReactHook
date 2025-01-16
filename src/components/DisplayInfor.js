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
    componentDidMount() {
        console.log('call me component did mount')
        setTimeout(() => {
            document.title = 'Eric'
        }, 3000)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>> call me component update', this.props, prevProps)
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert('You got 5 users')
            }
        }
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