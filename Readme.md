# メモアプリ - ローカルストレージ版

## 概要

ブラウザのローカルストレージを使用してメモを保存・読み込みできる Web アプリケーションです。TypeScript や React へのスケールを見据えた準備段階として、バニラ JavaScript で実装されています。

## 機能

- ✅ メモの入力・編集
- ✅ ローカルストレージへの自動保存
- ✅ ページ再読み込み時の自動復元
- ✅ リアルタイムプレビュー
- ✅ レスポンシブデザイン

## 使用技術

- **HTML5**: セマンティックなマークアップ
- **CSS3**: モダンなスタイリング（フレックスボックス、アニメーション）
- **JavaScript (ES6+)**: DOM 操作、LocalStorage API

## ファイル構成

```
project/
├── index.html          # メインHTML
├── style.css           # スタイルシート
├── script.js           # JavaScript機能
└── img/
    └── Simple_Background-G5.png  # 背景画像
```

## 主な実装内容

### HTML 構造

- セマンティックな HTML5 要素を使用
- アクセシビリティを考慮した label 要素
- 日本語対応（lang="ja"）

### CSS 設計

- **モダンなレイアウト**: Flexbox を使用したセンタリング
- **レスポンシブデザイン**: max-width による柔軟な幅調整
- **視覚的フィードバック**: ホバー効果、フォーカス状態
- **アニメーション**: 滑らかなトランジション効果

### JavaScript 機能

- **LocalStorage API**: データの永続化
- **イベントリスナー**: ユーザー操作の処理
- **リアルタイム更新**: 入力と同時にプレビュー更新

## 使用方法

### 1. セットアップ

```bash
# プロジェクトをクローンまたはダウンロード
# Webサーバーで実行（推奨）
python -m http.server 8000
# または
npx serve .
```

### 2. 基本操作

1. テキストエリアにメモを入力
2. 「メモを保存」ボタンをクリック
3. 入力内容が自動的に下部に表示される
4. ページを再読み込みしても内容が保持される

### 3. 機能詳細

#### 自動保存機能

```javascript
// 保存ボタンクリック時
saveButton.addEventListener("click", () => {
  const memoContent = memoTextarea.value;
  localStorage.setItem(STORAGE_KEY, memoContent);
  displayMemo.textContent = memoContent;
  alert("メモが保存されました！");
});
```

#### 自動復元機能

```javascript
// ページロード時
function loadMemo() {
  const savedMemo = localStorage.getItem(STORAGE_KEY);
  if (savedMemo) {
    memoTextarea.value = savedMemo;
    displayMemo.textContent = savedMemo;
  }
}
```

#### リアルタイムプレビュー

```javascript
// 入力時のリアルタイム更新
memoTextarea.addEventListener("input", () => {
  displayMemo.textContent = memoTextarea.value;
});
```

## 技術的なポイント

### LocalStorage の活用

- キー名: `"mySuperMemo"`
- データ形式: 文字列（プレーンテキスト）
- 容量制限: 一般的に 5-10MB
- 有効期限: 明示的に削除するまで永続

### CSS アニメーション

- ボックス要素のホバー効果
- 疑似要素（::before, ::after）を使用したボーダーアニメーション
- トランジション効果で滑らかな動作

### レスポンシブ対応

- `max-width: 600px` で最大幅を制限
- `calc(100% - 24px)` でパディングを考慮した幅調整
- `resize: vertical` でテキストエリアの垂直リサイズのみ許可

## 今後の拡張予定

- TypeScript 化
- 複数メモの管理
- カテゴリ分類
- 検索機能
- インポート/エクスポート機能
