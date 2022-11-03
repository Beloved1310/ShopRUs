const {Sequelize} = require('sequelize')

const testsequelize = new Sequelize('test-db', 'user', 'pass',{
    dialect: 'sqlite',
    host: './testdb.sqlite3'
})

module.exports = testequelize