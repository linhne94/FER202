import React, { useState } from 'react'

const Ex11 = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className='container text-center'>
            <h1>Todo List</h1>
            <div>
                <div class="input-group mb-3 w-50 m-auto">
                    <input type="text" class="form-control" value={inputValue}
                        onChange={handleInputChange} placeholder="Enter a new todo..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button onClick={handleAddTodo} class="btn btn-success" type="button">Button</button>
                    </div>
                </div>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <p key={index} className='d-flex justify-content-center gap-3'>
                        {todo}
                        <button onClick={() => handleDeleteTodo(index)} className='btn btn-danger'>Delete</button>
                    </p>
                ))}
            </ul>
        </div>
    )
}

export default Ex11