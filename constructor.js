//생성자 함수

function User(name, age) {
  //name, age 를 받아 this 에 넣음
  this.name = name;
  this.age = age;
}

let user1 = new User("Mike", 30);
let user2 = new User("Jane", 22);
let user3 = new User("Tom", 17);
