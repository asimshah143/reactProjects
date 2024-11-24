import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams() 
    return (
        <h1 className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>user: {userId}</h1>
    )
}

export default User
