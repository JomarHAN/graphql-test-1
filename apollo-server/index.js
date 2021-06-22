const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const { typeDefs } = require('./Schema/TypeDefs')
const { resolvers } = require('./Schema/Resolvers')

const app = express()
const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

app.listen({ port: 3003 }, () => {
    console.log('Server is running on 3003')
})