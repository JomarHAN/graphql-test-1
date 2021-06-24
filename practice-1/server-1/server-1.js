const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const typeDefs = require('./Schemas/TypeDefs')
const resolvers = require('./Schemas/Resolvers')

const app = express()

const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

app.listen({ port: 3030 }, () => {
    console.log(`Server is running on 3030`)
})