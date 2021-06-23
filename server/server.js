const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')

const app = express()
const PORT = 6969

const schema = require('./Schemas')

app.use(express.json())
app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})