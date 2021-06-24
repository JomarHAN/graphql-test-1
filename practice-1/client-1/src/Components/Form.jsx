import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { CREATE_NEW_USER } from '../GraphQL/Mutations'

function Form() {
    const [name, setName]=useState("")
    const [age, setAge]=useState()
    const [married, setMarried]=useState()

    const [createUser,{error}] = useMutation(CREATE_NEW_USER)

    const addUser = () => {
        createUser({
            variables:{
                name: name,
                age: age,
                married: married
            }
        })
        if(error){
            console.log(error);
        }
    }
    return (
        <div >
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <input type="text" placeholder="Married" value={married} onChange={(e) => setMarried(e.target.value)} />
            <button onClick={addUser}>Add</button>
        </div>
    )
}

export default Form
