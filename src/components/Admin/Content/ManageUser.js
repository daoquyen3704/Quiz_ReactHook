import ModalCreateUser from "./ModalCreateUser";


const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                manage user
            </div>
            <div className="users-content">
                <div>
                    <button>
                        Add new users
                    </button>
                </div>
                <div>
                    Table Users
                    <ModalCreateUser/>
                </div>
            </div>
        </div>
    )
}
export default ManageUser;