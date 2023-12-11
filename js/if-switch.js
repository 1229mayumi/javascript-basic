console.log(40 + 18);
console.log(45 > 18);

//算術演算子を使った場合の戻り値を出力
console.log(45 + 18);
//比較演算子
console.log(48>18);
//等価演算子
console.log('5' == 5);
//厳密等価演算子
console.log('5' === 5 );

//7.5-1(ifのみ記述するパターン)
//変数numに0〜4までのランダムな整数を代入
let num = Math.floor(Math.random()*5);
//変数numの値を出力（確認用）
console.log(num);
//変数numの値が4であれば、「大当たりです」という文字列を出力
if (num === 4){
  console.log('大当たりです');
}
//7.5-2(ifとelseを記述するパターン)
//変数num2に0〜4までのランダムな整数を代入
let num2 = Math.floor(Math.random()*5);
//変数num2の値を出力（確認用）
console.log(num2);
//変数num2の値が4であれば、「大当たりです」という文字列を出力
if (num2 === 4){
  console.log('大当たりです');
}
else {
  console.log('ハズレです');
}

//7.5-3 if, else if, else を記述するパターン
//変数num2に0〜4までのランダムな整数を代入
let num3 = Math.floor(Math.random()*5);
//変数num2の値を出力（確認用）
console.log(num3);
//変数num3の値が4であれば、「大当たりです」という文字列を出力
if (num3 === 4){
  console.log('大当たりです');
}
else if (num === 3){
  console.log('当たりです');
}
else{
  console.log('ハズレです');
}

//7.6 「かつ&&」「または||」で複数の条件式を組み合わせる方法
//&&（かつ）を記述して、すべての条件が成り立つ場合にのみ処理を行う。(変数numの値が11〜29)


num=15

if (num > 10 && num < 30){
  console.log('変数numは10より大きく、30より小さいです');
}
else {
  console.log('条件が成り立ちませんでした');
}

num=10

//||（または）を記述して、一つでも条件が成り立てば処理を行う（変数numの値が10または30)
if (num === 10 || num === 30) {
  console.log('変数numは10または30です');
}
else {
  console.log('条件が成り立ちませんでした')
}

//8.4-1 caseのみを記述するパターン
//変数numに0〜4までのランダムな整数を代入する
num = Math.floor(Math.random()*5);
//変数numの値を出力する（確認用）
console.log(num);
//変数numの値によって、出力する文字列を切り替える
switch(num){
  case 2:
    console.log('小吉です')
    break;
  case 3:
    console.log('中吉です')
    break;
  case 4:
    console.log('大吉です')
    break;
    //8.4-2 caseとdefaultを記述するパターン
  default:
    console.log('末吉です')
    break;
}

