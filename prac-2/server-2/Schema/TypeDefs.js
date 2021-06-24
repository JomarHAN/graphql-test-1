const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User{
        name: String!
        age: String!
        married: String!
    }

    #Query
    type Query {
        getAllUserList: [User!]!
    }

    #Mutation
    type Mutation {
        createNewUser(name: String!,age: String!,married: String!): User!
    }
`

module.exports = typeDefs