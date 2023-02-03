// function User(firstName, lastName, avatar){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// User.prototype.className = 'F8';
// User.prototype.getClassName = function(){
//     return this.className;
// }

// var user = new User('Nguyen', 'Hung', 'avatar');
// var user2 = new User('Tran', 'Lan', 'avatar');

// console.log(user.className);
// console.log(user2.getClassName());

var inputElement = document.querySelector('input[type="text"')

inputElement.onchange = function(e){
    console.log(e.target.value);
}