import React from 'react'
import Props3 from './Props3'

const Props2 = ({ number }) => {
    return (
        <>
            <div className='container'>Props2 {number + 2}</div>
            <Props3 number={number} />
        </>
    )
}

export default Props2