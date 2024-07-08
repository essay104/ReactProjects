import React from 'react'
import Props1 from './Props1'
import { useSelector, useDispatch } from 'react-redux'

const Container = () => {
    const number = useSelector(state => state.number)
    const dispatch = useDispatch()

    const onclick = () => {
        dispatch({ type: 'INCREMENT' })
    }

    return (
        <>
            <div className='container'>Container
                <button onClick={onclick} >{number}</button>
            </div>
            <Props1 number={number} />
        </>
    )
}

export default Container