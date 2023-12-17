// //クラスを定義する
// class Product {
//   //インスタンス化すると同時に処理を実行（初期化）する
//   constructor(){
//     console.log('敏感肌にも優しい100%天然由来のシャンプーです。');
//   }
// }
//インスタンス化する
// const shampoo = new Product();

//クラスを定義する
class Product {
  //コンストラクタを使ってインスタンス化する時に初期化する
  constructor() {
    console.log("敏感肌にも優しい100%天然由来のシャンプーです。");
    //インスタンス（オブジェクト）にプロパティを持たせる
    this.name = "シャンプー";
    this.price = 500;
    this.category = "生活雑貨";
  }
}
//インスタンス化する
const shampoo = new Product();
//インスタンス（オブジェクト）の値を出力する
console.log(shampoo);

class Product2 {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}
//インスタンス化する時に引数を渡す
const shampoo2 = new Product2("シャンプー", 500, "生活雑貨");

//クラスを定義する
class Product3 {
  //コンストラクタを使ってインスタンス化する時に初期化する
  constructor(name, price, category) {
    //インスタンス（オブジェクト）にプロパティを持たせる
    this.name = name;
    this.price = price;
    this.category = category;
  }

  //メソッドを定義する
  describe() {
    console.log("この商品名は" + this.name + "です。");
  }
}

//インスタンス化する
const shampoo3 = new Product3("シャンプー", 500, "生活雑貨");
const coffee = new Product3("コーヒー", 1500, "飲料");

//インスタンス（オブジェクト）の値を出力する
console.log(shampoo3);
console.log(coffee);

//メソッドを呼び出す（実行する）
shampoo3.describe();
coffee.describe();

//通常のオブジェクトにメソッドを定義する
const user = {
  name: "侍太郎",
  age: 36,
  gender: "男性",
  greet: () => {
    console.log("よろしくお願いします!");
  },
};
//メソッドを呼び出す（実行する）
user.greet();
