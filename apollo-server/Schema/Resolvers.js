const { dataUsers } = require("../../FakeData")

const resolvers = {
    Query: {
        getAllUsers() {
            return dataUsers
        }
    },
    Mutation: {
        createUser(parent, args) {
            const newUser = args;
            dataUsers.push(newUser)
            return newUser
        }
    }
}

module.exports = { resolvers }