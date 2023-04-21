/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
  const array = usersArray.find(function (val) {

    let keys = Object.keys(val);
    if (val.username == username) {
      return username;
    } else {
      return undefined;
    }
  })
  return array;
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  const findUserPoint = usersArray.findIndex(function (val) {
    if (val.username == username) {
      return val;
    }


  })
  const findUser = usersArray.find(function (val) {
    if (val.username == username) {
      return username;
    } else {
      return undefined;
    }
  })
  usersArray.splice(findUserPoint, 1);
  return findUser;
}

