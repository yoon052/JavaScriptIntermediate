// forEach
let users = ["Mike", "Tom", "Jane"];
users.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});

// find | findIndex | filter
//1.짝수찾기
let arr = [1, 2, 3, 4, 5, 6];
const result = arr.filter((item) => {
  return item % 2 === 0;
});

console.log(result);

//2.미성년자 찾기
let userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
];

const result2 = userList.find((user) => {
  if (user.age < 19) {
    return true;
  }
  return false;
});

console.log(result2);
