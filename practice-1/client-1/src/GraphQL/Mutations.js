import { gql } from '@apollo/client'

export const CREATE_NEW_USER = gql`
    mutation createUser(
        $name: String!
        $age: String!
        $married: String!
    ){
        createUser(
            name: $name
            age: $age
            married: $married
        ){
            name
            age
            married
        }
    }
`