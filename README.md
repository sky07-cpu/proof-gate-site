# Proof Gate 企業サイト

生成AI／RAG型チャットボットの回答品質を、テストケースで検査し、人間が承認し、その記録を残す品質管理基盤「Proof Gate」の紹介サイトです。

現在は見た目と情報設計を確認するための静的サイトです。ログイン、データベース、API連携、問い合わせフォームの送信処理は実装していません。

## 使用技術

- Vite
- React
- TypeScript
- React Router
- 通常のCSS（Tailwind CSSや外部UIライブラリは不使用）

## 各技術の役割

| 技術 | このプロジェクトでの役割 |
| --- | --- |
| HTML | ページの土台です。`index.html` にReactを表示するための入口となる要素を置いています。 |
| CSS | 色、余白、文字サイズ、カード、レスポンシブ表示、背景アニメーションなど、見た目を担当します。 |
| JavaScript | ブラウザ上で表示や操作を動かす言語です。このプロジェクトではTypeScriptからJavaScriptに変換されます。 |
| TypeScript | JavaScriptに「型」を加えた言語です。データの間違いに開発中に気づきやすくします。 |
| React | 画面を部品とデータから組み立てるライブラリです。ページやカードの繰り返し表示を分かりやすく書いています。 |
| React Router | URLに応じて表示するページを切り替えます。`/about` や `/features` のような複数ページ化を担当します。 |
| Vite | 開発サーバーの起動と、本番公開用ファイルの生成を担当する開発ツールです。 |
| Node.js | ViteやTypeScriptなどの開発ツールをPC上で動かす実行環境です。 |
| npm | パッケージのインストールと、開発・ビルド用コマンドの実行を担当します。 |

## 複数ページ化について

React Routerを導入し、以下のページを作成しています。

- `/`：トップページ
- `/about`：Proof Gateについて
- `/features`：機能紹介
- `/contact`：お問い合わせページ

ブラウザでURLが変わると、`src/App.tsx` の `Routes` が対応するページコンポーネントを表示します。

## ファイル構成

```text
proof-gate-site/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ styles.css
│  ├─ pages/
│  │  ├─ Home.tsx
│  │  ├─ About.tsx
│  │  ├─ Features.tsx
│  │  └─ Contact.tsx
│  └─ components/
│     ├─ Header.tsx
│     ├─ Footer.tsx
│     ├─ SectionHeading.tsx
│     └─ FAQ.tsx
├─ index.html
├─ package.json
└─ vite.config.ts
```

## pages/ と components/ の違い

- `pages/`
  - URLごとに表示される「ページ本体」を置きます。
  - 例：トップページは `Home.tsx`、機能紹介ページは `Features.tsx` です。
- `components/`
  - 複数ページで使い回す部品を置きます。
  - 例：ヘッダー、フッター、FAQ、見出し部品などです。

ページが大きくなっても、まずは「ページ」と「共通部品」の2種類で考えると追いやすくなります。

## 今回追加した動き

- FAQの開閉
  - `components/FAQ.tsx` のReact stateで「今どのFAQが開いているか」を管理しています。
- スマホ用ナビゲーション
  - `components/Header.tsx` のReact stateで「メニューが開いているか」を管理しています。
- スクロール時のふわっと表示
  - `src/App.tsx` の `IntersectionObserver` で表示タイミングを検知し、CSSクラスを付け替えています。
- 背景のCSSアニメーション
  - トップページの背景グリッド、光、データカードのゆっくりした動きを `styles.css` の `@keyframes` で実装しています。
- ホバーアニメーション
  - CTAボタンやカードにマウスを乗せると、少し浮くような動きをします。

CSSアニメーションは、動画ファイルを使わずに奥行きや動きを出すための仕組みです。今回はBtoB SaaSらしく、控えめで信頼感のある動きにしています。

## ローカルで動かす手順

### 1. 必要なもの

- Node.js 20.19以上（または22.12以上）
- npm（Node.jsと一緒にインストールされます）

### 2. パッケージをインストール

```bash
npm install
```

### 3. 開発サーバーを起動

```bash
npm run dev
```

ターミナルに表示されたURL（通常は `http://localhost:5173`）をブラウザで開きます。

### 4. 開発サーバーを止める

ターミナルで `Ctrl + C` を押します。

## 本番公開用ファイルを作る

```bash
npm run build
```

このプロジェクトでは、今回の変更後に `npm run build` が成功することを確認しています。

生成結果をローカルで確認する場合は次を実行します。

```bash
npm run preview
```

## 現在の実装範囲

- 複数ページの企業向けSaaSサイト
- 固定ヘッダー
- PC・タブレット・スマートフォン向けレスポンシブ表示
- CSSアニメーションによる背景ビジュアル
- FAQの開閉
- スマホ用ハンバーガーメニュー
- スクロール時の表示演出
- お問い合わせフォーム風UI

問い合わせフォームは見た目確認用です。実際の送信先やフォーム処理は、将来のWebアプリ化・運用要件に合わせて追加してください。
