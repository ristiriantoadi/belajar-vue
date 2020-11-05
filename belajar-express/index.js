const express = require('express')
// var mongo = require('mongodb');

const app = express()

const PORT = process.env.port || 5000

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

//import routes
const postsRoute = require('./routes/posts')


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

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ristiriantoadi:globalwarming@cluster0.dn2im.mongodb.net/contoh?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology:true},()=>{
    console.log("connected to db")
});

app.listen(PORT,()=>{console.log(`Server listen at port ${PORT}`)})