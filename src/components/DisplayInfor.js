import React from "react";
import './DisplayInfor.scss';

//stateless vs stateful
// class DisplayInfor extends React.Component {
//     state = {
//         isShowListUser: true
//     }


//     render() {
//         // destructuring array/obj
//         const { listUsers } = this.props;
//         return (
//             <div className="display-infor-container">

//                 {true &&
//                     <>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <>
//                                     <div key={user.id} className={+user.age > 18 ? "blue" : "red"}>
//                                         <div>My Name's {user.name}</div>
//                                         <div>My Age's {user.age}</div>

//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;
    return (
        <div className="display-infor-container">

            {true &&
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