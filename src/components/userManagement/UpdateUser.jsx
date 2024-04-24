import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './redux/UserSlice'

const UpdateUser = () => {
    const { id } = useParams()
    const users = useSelector((state) => state.users)
    const user = users.filter(u => u.id === id)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [newUser, setnewUser] = useState(user[0])
    // console.log(newUser[0].id)

    const handleChange = (e) => {
        setnewUser({
            ...newUser,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateUser(newUser))
        navigate('/')
        // console.log(users)
    }

    return (
        <div>
            <h1 className='text-center'>Update Product</h1>
            <div className="container w-25">

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        Name:
                        <input type="text" className="form-control" id='name' value={newUser.name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        Email:
                        <input type="text" className="form-control" id='email' value={newUser.email} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        Phone Number:
                        <input type="text" className="form-control" id='phoneNum' value={newUser.phoneNum} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        Address:
                        <input type="text" className="form-control" id='address' value={newUser.address} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default UpdateUser