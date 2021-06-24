import { gql } from '@apollo/client'

export const LOAD_USER_LIST = gql`
    query {
        getAllUserList{
        name
        age
        married
        }
    }
`