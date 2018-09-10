const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js')

// var id = '5b95afa344d8b10927f4aee911';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => {
//   console.log(e);
// });


User.findById('5b9598ba881fe7085c7141e2').then((user) => {
  if(!user) {
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined,2));
}, (e) => {
  console.log(e);
});
