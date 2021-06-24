const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const typeDefs = require('./Schemas/TypeDefs')
const resolvers = require('./Schemas/Resolvers')
const cors = require('cors')

const app = express()
// app.use(express.json())
// app.use(cors())

const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

app.listen({ port: 3030 }, () => {
    console.log(`Server is running on 3030`)
})