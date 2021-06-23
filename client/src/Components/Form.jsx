import React, { useState } from 'react'
import {CREATE_USER_MUTATION} from '../GraphQL/Mutations'
import {useMutation} from '@apollo/client'

function Form() {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [createUser, {error}] = useMutation(CREATE_USER_MUTATION)

    const addUser = () => {
        createUser({
            variables:{
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }
        })

        if(error){
            console.log(error);
        }
    }
    return (
        <div>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={addUser}>Create User</button>
        </div>
    )
}

export default Form
