import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { LOAD_USER_LIST } from '../GraphQL/Queries'

function GetUsers() {
    const {error,loading, data} = useQuery(LOAD_USER_LIST)

    useEffect(() => {
        console.log(data);
    },[data])
    return (
        <div>
            
        </div>
    )
}

export default GetUsers
