// 생성자 함수 : 상품 객체를 생성해보자.

function Item(title, price) {
  //상품 이름, 가격
  // this = {}; // this 는 현재 빈 객체
  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`가격은 ${price}원 입니다.`);
  };

  // this 리턴
}

const item1 = new Item("인형", 3000);
const item2 = new Item("가방", 4000);
const item3 = new Item("지갑", 9000);
3;

console.log(item1, item2, item3);

item3.showPrice();
