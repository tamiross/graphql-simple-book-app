const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();
const port = '5000'

// Connect to MongoDB Atlas database
const uri = 'mongodb+srv://test1:123123123@cluster0-rbmru.mongodb.net/test?retryWrites=true&w=majority' // TODO: MOve to config module
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log('Connected to database!')
})

// GraphQL's single endpoint path.
// We use a middleware (grapqlHTTP() function) because express does not know 
// how to handle GraphQL requests out of the box.
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
