const { dataUsers } = require('../../../FakeData')

const resolvers = {
    Query: {
        getAllUserList() {
            return dataUsers
        }
    },

    Mutation: {
        createNewUser(parent, args) {
            const newUser = args;
            dataUsers.push(newUser)
            return args
        }
    }
}

module.exports = resolvers