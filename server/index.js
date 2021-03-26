const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

mongoose.connect("MONGODB_URI=mongodb://deven:dev123@cluster0-shard-00-00.4pnhv.mongodb.net:27017,cluster0-shard-00-01.4pnhv.mongodb.net:27017,cluster0-shard-00-02.4pnhv.mongodb.net:27017/graphqlapi?ssl=true&replicaSet=Cluster0-shard-0'&authSource=admin&retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
    console.log('connected to database successful')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql : true
}))

app.listen(4000, () => {
    console.log('now listening for requests on port 4000')
})