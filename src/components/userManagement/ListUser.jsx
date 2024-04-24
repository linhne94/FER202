import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteUser } from './redux/UserSlice';

const ListUser = () => {

    const users = useSelector((state) => state.users)
    // console.log(users)

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser({ id }))
    }

    return (
        <div className='container-xxl'>
            <div className='d-flex justify-content-end mx-5 mt-3'>

                <Link to={'/create'} className='btn btn-success'>Create new user</Link>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col-lg-1">#</th>
                        <th scope="col-lg-2">Name</th>
                        <th scope="col-lg-3">Email</th>
                        <th scope="col-lg-2">Phone Number</th>
                        <th scope="col-lg-2">Address</th>
                        <th scope="col-lg-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map(user => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNum}</td>
                                <td>{user.address}</td>
                                <td>
                                    <Link to={`/edit/${user.id}`} className='btn btn-primary'>Edit</Link>
                                    <button onClick={() => handleDelete(user.id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListUser