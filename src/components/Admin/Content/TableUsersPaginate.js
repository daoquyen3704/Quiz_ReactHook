import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';

const TableUsersPaginate = (props) => {
    // const [listUsers, setListUsers] = useState([])
    // const [pageCount, setPageCount] = useState(0);

    const { listUsers, pageCount } = props;

    const handlePageClick = (event) => {
        props.fetchListUsersWithPaginate(+event.selected + 1);
        props.setCurrentPage(+event.selected + 1);
        console.log(
            `User requested page number ${event.selected}`
        );
    };

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`table-users-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() => props.handleClickBtnView(item)}
                                        >View</button>
                                        <button
                                            className="btn btn-warning mx-3"
                                            onClick={() => props.handleClickBtnUpdate(item)}
                                        >Update</button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => props.handleClickBtnDelete(item)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan={"4"}>NOT FOUND DATA</td>
                        </tr>
                    }

                </tbody>
            </table>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next >"
                previousLabel="< Prev"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                containerClassName="pagination justify-content-center"  // Container class for Bootstrap pagination
                pageClassName="page-item" // Page item class
                pageLinkClassName="page-link" // Page link class
                previousClassName="page-item" // Previous button class
                previousLinkClassName="page-link" // Previous link class
                nextClassName="page-item" // Next button class
                nextLinkClassName="page-link" // Next link class
                breakClassName="page-item" // Break button class
                breakLinkClassName="page-link" // Break link class
                activeClassName="active" // Active page class
                forcePage={props.currentPage - 1}
            />
        </>
    )
}
export default TableUsersPaginate;