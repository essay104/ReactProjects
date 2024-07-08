import React from 'react'
import Props2 from './Props2'

const Props1 = ({ number }) => {
    return (
        <>
            <div className='container'>Props1 {number + 1}</div>
            <Props2 number={number} />
        </>
    )
}

export default Props1