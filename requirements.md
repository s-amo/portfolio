# ポートフォリオサイト 要件定義書

## 1. プロジェクト概要

個人のポートフォリオサイトを構築する。自己紹介・スキル・制作物を一覧できる静的な SPA として公開し、採用担当者や協業者に向けて自分のプロフィールを提示することを目的とする。

---

## 2. 技術スタック

| 項目 | 技術 |
|------|------|
| フレームワーク | React 18 |
| ビルドツール | Vite |
| スタイリング | TailwindCSS v3 |
| 言語 | TypeScript |
| デプロイ先 | GitHub Pages |

---

## 3. 機能要件

### セクション構成（SPA / シングルページスクロール）

#### 3.1 Hero
- 氏名の表示
- キャッチコピー（サブタイトル）の表示
- CTA ボタン（例: 「制作物を見る」「お問い合わせ」）

#### 3.2 About
- 自己紹介文
- 経歴・バックグラウンドの概要

#### 3.3 Skills
- 技術スタック一覧をカテゴリ別に表示（例: Frontend / Backend / Tools）
- アイコンまたはバッジ形式での表示

#### 3.4 Projects
- 制作物カード一覧
  - タイトル
  - 概要説明
  - 使用技術タグ
  - GitHub リンク / デモリンク

#### 3.5 Contact
- お問い合わせフォーム（静的サイトのため Formspree 等の外部サービスを利用）、または SNS リンク一覧（GitHub / Twitter / LinkedIn 等）

---

## 4. 非機能要件

### 4.1 レスポンシブデザイン
- モバイルファーストで設計
- TailwindCSS のブレークポイントを使用:
  - `sm`: 640px 以上
  - `md`: 768px 以上
  - `lg`: 1024px 以上

### 4.2 ダークモード対応
- TailwindCSS の `dark:` クラスで色を制御
- 切り替え方式: `prefers-color-scheme` メディアクエリに加え、手動トグルボタンを提供
- `tailwind.config.ts` で `darkMode: 'class'` を設定

### 4.3 ナビゲーション
- 単一ページスクロールナビ（ページ内アンカーリンク）
- ヘッダー固定 + スムーズスクロール
- React Router は使用しない（必要に応じて導入可）

---

## 5. デプロイ要件

### 5.1 GitHub Pages
- リポジトリの `gh-pages` ブランチまたは `docs/` フォルダへビルド成果物を配置

### 5.2 Vite 設定
```ts
// vite.config.ts
export default defineConfig({
  base: '/<リポジトリ名>/',
})
```

### 5.3 GitHub Actions による CI/CD（オプション）
- `main` ブランチへのプッシュをトリガーに自動ビルド・デプロイ
- `actions/deploy-pages` または `peaceiris/actions-gh-pages` を使用

---

## 6. ディレクトリ構成（推奨）

```
cc-handson-01/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Navbar.tsx
│   ├── data/
│   │   └── portfolio.ts      # コンテンツデータ（スキル・制作物等）
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 7. 制約・注意事項

- **静的サイト**: サーバーサイド処理なし。API エンドポイントは持たない
- **アクセシビリティ**:
  - 画像には適切な `alt` 属性を付与
  - インタラクティブ要素に `aria-label` 等を付与
  - キーボード操作に対応（フォーカス管理）
- **パフォーマンス**: 画像は最適化済みの形式（WebP 等）を使用し、不要な依存関係を追加しない
- **コンテンツ管理**: テキスト・スキル・制作物データは `src/data/portfolio.ts` にまとめ、コンポーネントから分離する
