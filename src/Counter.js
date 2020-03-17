import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            throw new Error('Unhandled action')
    }
}

export default function Counter() {
    const [number, dispatch] = useReducer(reducer, 0)
    const onIncrease = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }
    const deIncrease = () => {
        dispatch({
            type: 'DECREMENT'
        })
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={deIncrease}>-1</button>
        </div>
    )
}
