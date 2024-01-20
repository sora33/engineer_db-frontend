# Engineer-db frontend

## プロジェクトの概要
エンジニアのつながりを促進するサービス「エンジニアDB」のフロントエンドです。

プロダクトの詳細は、こちらの記事を参照ください。
https://qiita.com/hiiragiya/private/69ef1a3556cb63290d13

## 使用技術一覧

- 言語
  - TypeScript
- フレームワーク
  - Next.js 13 (App Router)
- 認証ライブラリ
  - [NextAuth.js](https://next-auth.js.org/)
- CSSライブラリ
  - [TailwindCSS](https://tailwindcss.com/)
  - [Tailwind Variants](https://www.tailwind-variants.org/)
  - [shadcn/ui](https://ui.shadcn.com/)
  - [tremor](https://www.tremor.so/)
- mardown実装ライブラリ
  - [react-md-editor](https://uiwjs.github.io/react-md-editor)
  - [sanitizer](https://github.com/rehypejs/rehype-sanitize)
- UIカタログ
  - [Storybook](https://storybook.js.org/)
- テストに関する技術・ライブラリ
  - [ESLint](https://eslint.org/)
  - [Pretiier](https://prettier.io/)
  - [Jest](https://jestjs.io/ja/)
  - [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

詳細は後述しています。

## スタートガイド
node.jsが必要です。

### 環境変数を設定
`.env`ファイルを作成し、下記を設定してください。
| 変数名                  | 役割                                      | DEV 環境での値                           |
| ----------------------- | ----------------------------------------- | ---------------------------------------- |
| GITHUB_CLIENT_ID        | GitHub OAuthのクライアントID              | ご自身で設定してください                     |
| GITHUB_CLIENT_SECRET    | GitHub OAuthのクライアントシークレット    | ご自身で設定してください |
| NEXTAUTH_SECRET         | NextAuth.jsのシークレット                 | hogehoge |
| NEXTAUTH_URL            | NextAuth.jsのコールバックURL              | http://localhost:8000                     |
| NEXT_PUBLIC_BACKEND_URL | バックエンドのエンドポイント                | http://localhost:3000                       |



### サーバーを起動
~~~
npm run dev
~~~

### その他コマンドについて
`package.json`のscriptsを参照ください。

## 技術的なこと

### フレームワーク
Next.js13のApp Routerを採用しています。 言語はTypeScriptです。。。。

#### 採用理由
キャッチアップを兼ねて、このサービスは、Next.jsの最新に追従していきたいので、採用しました。 

#### 良かった点
サーバーサイドデータフェッチが容易になっており、Railsとやりとりする部分は、全てサーバーサイドで処理するように実装しました。 データフェッチの部分では、状態管理が不要となるので、実装がシンプルになりました。

ルーティングとレイアウトの設計がしやすく、ディレクトリ構成から設計の意図が伝わりやすくなったように感じます。

学習教材としては、Nest.js が公式で出している、Learn Next.js がわかりやすいのでおすすめです。

https://nextjs.org/learn

### CSSやUIコンポーネントのライブラリ
Tailwind CSS で実装しています。

UI コンポーネントとして、Shadcn/UIを採用しています。
Shadcn UIは、Radix UIとTailwind CSSを用いたコンポーネントで、必要なUIのみをプロジェクトにinstallできるようなツールになっています。

参考: https://ui.shadcn.com/

#### 採用理由
Tailwind CSSは、クラス名など考える必要がなくスラスラ書けるので、開発速度が圧倒的に速いと思っています。
ネットではコードが見にくくなるようなデメリットの懸念が散見されましたが、一人で開発していたことや小規模なサービスだったので、気になりませんでした。

UI コンポーネントのShadcn/UIについて、
[2023 JavaScript Rising Stars](https://risingstars.js.org/2023/en)で、スターの増加数が高かったJSのOSSのラインキングで１位にもなっててかなり注目を浴びています。

使ってみた感想として、
プロジェクトに応じてスタイルを変更しやすく、ライブラリのような依存関係がないので取り入れやすかったりするので、Tailwind CSSを採用している場合はおすすめです。

### Storybook
#### 採用理由
コンポーネントの採用利用率を上げるため、UIテストを実装できるため、今後の保守運用の3点です。
このうち最も魅力に感じているのは、UIのテストを実装できることでした。

Storybook の採用デメリットとして、メンテコストが高い、腐らせてしまうなどが多いようでしたが、下記記事が参考にすると、それらの懸念は解消されると思いました。

つまり、Storybook を採用しても、「プロジェクトの複雑化を避け、ファイル生成のコストを共通化で抑え、スナップショットテストと絡めてリターンを得る。」ことが可能になります。

参考: 
- [Storybook を導入する際にやるべきこと 3 選](https://zenn.dev/sum0/articles/9463d16d9d40e2)
- [React 向け Storybook のチュートリアル](https://storybook.js.org/tutorials/intro-to-storybook/react/ja/get-started/)

### テストについて

ESLint と Pretiier による静的解析、Storybook による UI の単体テストと結合テスト、Jest によるビジネスロジックや関数の単体テストを実装しています。
Github Actions でプルリク時に、これらのテストが自動で走るように設定しています。

なお、E2E テストはコストがかかりすぎので、導入を諦めました。手動でチェックします。

フロントエンドのテスト手法として、Jest や React-testing による単体テストや結合テストが散見されましたが、〇〇コンポーネントに「〇〇」と書いてあればテスト OK のような例が散見されており、効果が薄そうだなぁ感じていました。

Storybookを使ったテストでは、インタラクションテストやビジュアルテストリグレッションテストが実装できることがわかりました。なので今回、UI に関するテストはStoryBookで実装するように決めました。

参考: 

- [フロントエンドのテスト戦略について考える](https://zenn.dev/koki_tech/articles/a96e58695540a7)
- [[Next.js]フロントテストのコストは Storybook で削減出来る](https://zenn.dev/sora_kumo/articles/8a79531e726b29#storybook-%E3%81%AE%E8%A8%AD%E5%AE%9A)

### ディレクトリ構成

\_components というディレクトリを切って、いい感じにコンポーネントを管理しています。
urlに関わるディレクトについて、ディレクトリ名は小文字ハイフンで統一しています。

大まかな構成は下記のような感じです。
```
.
├── app
│   ├── _components  # 全てにコンポーネント
│   │   ├── ui # atom, moduleレベルのコンポーネント
│   │   └── layout # 共通のheaderやfooterなど
│   ├── (authenticated)  # 認証後のページ
│   │   ├── _components # 認証後の共通コンポーネント
│   │   ├── engineers # エンジニアページ
│   │   │   ├── _components # エンジニアページの共通コンポーネント
│   │   │   ├── (root) # /engineersページ
│   │   │   │   ├── _components # /engineersページのコンポーネント
│   │   │   │   ├── layout.tsx # /engineersページのレイアウト、メタ情報
│   │   │   │   ├── page.tsx # /engineersページのデータフェッチ、コンポーネント配置
│   │   │   ├── [id] # /engineers/[id]以下のページ
│   │   │   └── layout.tsx # エンジニアページのレイアウト
│   │   ├── messages # DMページ
│   │   ├── mypage # マイページ
│   │   ├── posts # 投稿ページ
│   │   ├── quit # 退会ページ
│   │   └── layout.tsx
│   ├── (unauthenticated)  # 認証前のページ
│   ├── api  # Api Route
│   ├── globals.css
│   ├── layout.tsx  # 前ページ共通のレイアウト
│   ├── not-found.tsx
│   └── page.tsx  # 認証前後で、リダイレクトを設定している。
```

詳細は、こちらを参考にしてください。
App routerでは、このようなディレクトリ構成を採用&おすすめしているケースが多いです。

参考

- [Next.js 13 の ディレクトリ構成](https://scrapbox.io/wwwy-dev/Next.js_13%E3%81%AE_%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E6%A7%8B%E6%88%90)

### 開発で工夫したところ

- 画像投稿機能について、画像投稿前に、フロントエンド側で画像圧縮するようにし、無駄なサーバーやストレージのリソースを利用しないようにしました。
- レンダリングについて、基本的に SSR として、フォームなど状態管理が必要な部分のみを CSR にするようにしました。 また、ダッシュボードページ等の処理が重いページかつ、最新データでなくてもOKなページは、ISR にし、キャッシュしたデータを扱うようにしました。　（0.5hごと更新）
- url設計やUI, UX は丁寧に設計しました。 トップページなどのクリエイティブが必要な点は、外注すべきと思いました。。
- 無限スクロールとページネーションを使い分けています。使い分けのポイントは、UI・UXとURLが必要かどうか と思っています。　（今回SEOは関係ないので無視する）
    - 検索ページは、検索条件やページ数をクエリパラーメータで持たせるようにして、ページネーションを採用しています
    - それ以外のページは、UIUXの良い無限スクロールでを採用しています。


## 課題・やりたいこと

- トップページのデザインをアウトソースしていい感じにしたい。
- ユーザーにできるだけ多くのユーザー情報を登録してもらえるような動線設計を詰めたい。
- テスト手法について、もっと詰めていきたい。
- Next.js14 にアップデートしていきたい。
- バックエンドを Rails にしているが、Prisma などを使って Next.js に寄せていきたい。
