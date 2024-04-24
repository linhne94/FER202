import React, { useReducer } from 'react'
const initalState = {
    count: 0
}

function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

const DemoReducer = () => {
    const [state, dispatch] = useReducer(counterReducer, initalState)
    return (
        <div>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <p>{state.count}</p>
        </div>
    )
}

export default DemoReducer