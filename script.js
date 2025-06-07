const memoTextarea = document.getElementById("memoText");
const saveButton = document.getElementById("saveButton");
const displayMemo = document.getElementById("displayMemo");

const STORAGE_KEY = "mySuperMemo"; // ローカルストレージに保存する際のキー名

// ページロード時にローカルストレージからデータを読み込む
function loadMemo() {
  const savedMemo = localStorage.getItem(STORAGE_KEY);
  if (savedMemo) {
    memoTextarea.value = savedMemo; // テキストエリアに表示
    displayMemo.textContent = savedMemo; // 表示エリアにも表示
  } else {
    displayMemo.textContent = "まだ何も保存されていません。";
  }
}

// メモを保存する
saveButton.addEventListener("click", () => {
  const memoContent = memoTextarea.value;
  localStorage.setItem(STORAGE_KEY, memoContent); // ローカルストレージに保存
  displayMemo.textContent = memoContent; // 表示エリアを更新
  alert("メモが保存されました！");
});

// 初期ロード
loadMemo();

// テキストエリアの内容が変更されたら、リアルタイムで表示エリアも更新（オプション）
memoTextarea.addEventListener("input", () => {
  displayMemo.textContent = memoTextarea.value;
  if (memoTextarea.value === "") {
    displayMemo.textContent = "まだ何も保存されていません。";
  }
});
