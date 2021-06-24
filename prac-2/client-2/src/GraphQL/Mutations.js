import { gql } from "@apollo/client";

export const CREATE_NEW_USER = gql`
    mutation 
        createNewUser(
            $name: String!
            $age: String!
            $married: String!
        ){
            createNewUser(
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