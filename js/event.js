//output-btnというidを持つHTML要素を取得し,定数に代入する
const btn = document.getElementById('output-btn');
//HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  console.log('クリックされました!');
})

//add-btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('add-btn');
//parent-listというidを持つhtml要素を取得し、定数に代入する
const parentList = document.getElementById('parent-list');
//HTML要素がクリックされた時にイベント処理を実行する
addBtn.addEventListener('click', () => {
  //li要素を新しく作成する
  const childlist = document.createElement('li');
  childlist.textContent = 'これはリスト要素です';
  parentList.appendChild(childlist);
})