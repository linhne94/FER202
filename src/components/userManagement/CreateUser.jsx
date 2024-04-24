import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from './redux/UserSlice';


const CreateUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function generateRandomId() {
        return Math.random().toString(36).substr(2, 8);
    }

    // Sử dụng hàm để lấy một ID ngẫu nhiên


    const [newUser, setnewUser] = useState({
        id: generateRandomId(),
        name: '',
        email: '',
        phoneNum: '',
        address: ''
    })

    const handleChange = (e) => {
        setnewUser({
            ...newUser,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addUser(newUser))
        navigate('/')
        // console.log(products)
    }



    return (
        <div>
            <h1 className='text-center'>Add New User</h1>
            <div className="container w-25">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        Name:
                        <input type="text" className="form-control" id='name' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        Email:
                        <input type="text" className="form-control" id='email' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        Phone Number:
                        <input type="text" className="form-control" id='phoneNum' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        Address:
                        <input type="text" className="form-control" id='address' onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default CreateUser