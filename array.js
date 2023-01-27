var friendsAge = [22, 34, 45, 67, 78, 89];
var friendsName = ["arif", "alam", "suvo", "jahid", "tutul"];

//console.log(friendsAge);
console.log(friendsName.length);
//console.log(friendsAge[2]);
var element = friendsAge[2];
console.log(element);
friendsAge[3] = 35;
console.log(friendsAge);
console.log(friendsAge.indexOf(89));

friendsAge.pop();

friendsAge.push(30, 50);
console.log(friendsAge);