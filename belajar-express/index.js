const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

//import routes
const postsRoute = require('./routes/posts')


const app = express()
const PORT = process.env.port || 5000


app.use(bodyParser.json())


//routing
app.use('/posts',postsRoute)
app.use(express.static('./public'))
app.get('/', function (req, res) {
    res.send('Hello World!')
  })
app.post('/', function (req, res) {
    res.send('Got a POST request')
})
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

//connect to mongodb
mongoose.connect('mongodb+srv://ristiriantoadi:globalwarming@cluster0.dn2im.mongodb.net/contoh?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
  });
  



app.listen(PORT,()=>{console.log(`Server listen at port ${PORT}`)})