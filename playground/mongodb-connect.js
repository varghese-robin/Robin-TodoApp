// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/Robin-TodoApp',{
    useNewUrlParser: true
  },(err, client) => {
    if(err) {
      return console.log('Unable to connect to Mongo DB Server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('Robin-TodoApp');

    // db.collection('Tasks').insertOne({
    //   text: 'task1',
    //   completed: false
    // }, (err,result) => {
    //   if(err) {
    //     return console.log('Unable to insert Task');
    //   }
    //
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.collection('Users').insertOne({
      name: 'Robin',
      age: 29,
      location: 'London'
    }, (err,result) => {
      if(err) {
        return console.log('Unable to insert User');
      }

      console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    });

    client.close();
});
