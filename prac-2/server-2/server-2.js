const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./Schema/TypeDefs')
const resolvers = require('./Schema/Resolvers')

const app = express()

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app })

app.listen({ port: 3010 }, () => {
    console.log(`Server is running on 3010`)
})