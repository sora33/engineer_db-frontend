# エンジニア DB のフロントエンド

## 技術スタック

- NextJS 13
- CSS
  - [TailwindCSS](https://tailwindcss.com/)
  - [Tailwind Variants](https://www.tailwind-variants.org/)
  - [shadcn/ui](https://ui.shadcn.com/)
  - [tremor](https://www.tremor.so/)
- markdown
  - [react-md-editor](https://uiwjs.github.io/react-md-editor)
  - [セキュリティ sanitizer](https://github.com/rehypejs/rehype-sanitize)
  - ![サニタイズできてるっぽい](image.png)

## 環境変数

GITHUB_CLIENT_ID=hogehoge
GITHUB_CLIENT_SECRET=hogehoge
NEXTAUTH_SECRET=hogehoge
NEXTAUTH_URL=http://localhost:8000
NEXT_PUBLIC_BACKEND_URL=http://localhost:3000

## ポイント

- browser-image-compression で、フロントエンド側で画像圧縮するようにした
- ダッシュボードは、ISR にした。API フェッチは SSR にして、状態管理が必要なコンポーネントのみを CSR にした。パフォーマンスとセキュリティのため
  next: {
  revalidate: 100000,
  },
- url 設計、UI,UX に気を使った。ただ、ユーザーにできるだけ多くのユーザー情報を入力してもらえるように、動線設計をもっと検討すべきである。現状は、ユーザーがプロフィール情報をあまり埋めてない場合にダイアログを表示するようにした。結構イライラする設計になったので、本望ではないが、妥協案です。。
- 無限スクロールとページネーションを使い分けた。投稿一覧ページは無限スクロールとし、ユーザー一覧&検索ページは、pagination はページネーションとした。使い分けのポイントは、一覧画面が１ページ（/post）で良いか、複数ページ（/post?page=1）が良いのかが重要です。主に、SEO と UX に影響しますが、今回は UX に注目しました。ユーザー一覧&検索ページは、検索条件やページ番号を URL でもつ方が、ユーザーにやさしいので、ページネーションとしました。なお、基本的には無限スクロールの方がユーザー体験が良いと思うので、複数ページにする理由がなければ、無限スクロールを推しています。
- ユーザー数が 100 は行きたいと思った。
- いろんな技術を詰め込みたいと思った。
-

## グラフどうしようか

- 年齢別の円グラフ
- 性別別の利用者推移グラフ
- ご利用目的の円グラフ
- 職種の円グラフ
- 働き方の円グラフ
- 直近ログインしているエンジニア

## テスト

- トレードオフの観点でバランスのよい結合テストを厚めに書く
- E2E テストは、課金導線やタイムラインなどの、不具合が発生するとビジネス上のネガティブインパクトの大きい箇所だけ書く
- 単体テストは、明らかにテストしなくても自明なロジックに対しては書かない。複雑性が高いビジネスロジックの関数に関しては書く
- 静的テストはベースラインとして必ず引く。導入が後回しになればなるほど導入コストが跳ね上がるので、プロジェクトの最初に必ず入れる
  参照

- [フロントエンドのテスト戦略について考える](https://zenn.dev/koki_tech/articles/a96e58695540a7)

### フロントエンド

#### 静的解析

最低限必要。プロダクト開始前に設定すべきもの。

- [ESLint](https://eslint.org/)
- [Pretiier](https://prettier.io/)

#### 単体テスト

ここは浅めでも良い。

- [Jest](https://jestjs.io/ja/)

#### 結合テスト

ここは厚めにする。

- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

#### E2E テスト

- 実装、実行、メンテナンスにかかるコストが大きいかった + 個人開発ということもあり、目視のゴリ押しです。

#### パフォーマンス、アクセシビリティのテスト

### バックエンド

#### 静的解析

#### 単体テスト

#### 結合テスト

サービスに登録しているだけで、

汎用的なメソッドやビジネスロジックには、Jest で
https://zenn.dev/sora_kumo/articles/8a79531e726b29#storybook-%E3%81%AE%E8%A8%AD%E5%AE%9A

この記事では、Storybook の Story をテスト化し、CI に組み込む方法を紹介しました。Play function を利用することで、コンポーネントの外観だけではなく振る舞いまでを Storybook で検証することが可能になります。
Storybook のテスト化は、Jest+Testing Library を使用してテストを作成するよりも、コンポーネントの実際の振る舞いを理解しやすく、テストが書きやすいと思いました。また、適切にストーリーを作成すれば、コンポーネントの仕様を Storybook だけで共有することが可能となるので、非エンジニアの方との連携がスムーズになるメリットもあるかと思います。
CI の設定と作成したコンポーネントの Story さえ作成しておけば、レンダリングのエラーを自動的に検出することができるので、この仕組みをプロジェクト初期から組み込むことで、デグレの削減が期待できるのもいいですね。Storybook のテスト化おすすめです！
