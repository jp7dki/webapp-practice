# CLAUDE.md

## プロジェクト概要

現在時刻を画面いっぱいに大きく表示する、シンプルな静的Webページです。
GitHub Pages でそのまま公開できる構成になっています。

## ファイル構成

```
.
├── index.html   # ページ本体（エントリーポイント）
├── style.css    # スタイル（ライト/ダークモード対応）
├── script.js    # 時刻・日付の表示と毎秒の更新
├── .nojekyll    # GitHub Pages で Jekyll 処理を無効化
├── CLAUDE.md    # このファイル
└── README.md
```

## 開発ルール

- **HTML / CSS / JavaScript のみを使う。** フレームワーク、ビルドツール、npm パッケージ、外部 CDN は導入しない。
- **ビルド不要を維持する。** リポジトリのルートに置いたファイルがそのまま公開される前提で書く。
- `index.html` はリポジトリのルートに置く（GitHub Pages のエントリーポイント）。
- ファイル参照は相対パス（例: `style.css`）で書く。`/style.css` のような絶対パスは、プロジェクトページ（`/<リポジトリ名>/` 配下）で壊れるので使わない。
- JavaScript は外部ライブラリに依存せず、ブラウザ標準 API だけで書く。
- スマートフォン幅でも横スクロールが出ないレイアウトを保つ。
- ライト/ダークモードの両方で読めることを確認する。
- UI の文言・コメントは日本語で書く。

## ローカルでの確認

ブラウザで `index.html` を直接開くか、簡易サーバーを立てる:

```sh
python3 -m http.server 8000
# http://localhost:8000 を開く
```

## 公開方法（GitHub Pages）

1. GitHub のリポジトリで **Settings → Pages** を開く
2. **Source** を「Deploy from a branch」にする
3. ブランチ（例: `main`）とフォルダ `/ (root)` を選んで保存
4. 数分後に `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開される
