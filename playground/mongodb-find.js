// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/Robin-TodoApp',{
    useNewUrlParser: true
  },(err, client) => {
    if(err) {
      return console.log('Unable to connect to Mongo DB Server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('Robin-TodoApp');

    // db.collection('Tasks').find({
    //   _id: new ObjectID('5b93f11e537fa904ae49bde7')
    // }).toArray().then((docs) => {
    //   console.log('Tasks');
    //   console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //   console.log('Unable to Fetch Tasks');
    // });

    db.collection('Users').find().count().then((docs) => {
      console.log('Tasks');
      console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
      console.log('Unable to Fetch Tasks');
    });

    //client.close();
});
