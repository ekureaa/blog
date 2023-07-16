---
slug: start-blog
title: ブログはじめました
authors: [ekurea]
tags: [雑記, test]
---

タイトルの通り，ブログをはじめてみました．

技術の話とか勉強したことのまとめ，あとは日々の雑記など書いていきたいです．

<!--truncate-->

## ブログを始めた理由

色々理由はあるのですが，主に以下の理由からです．

- 長文を書く癖をつけたい
- 文を書きたいけど人目につかないところがいい(でもネット上には存在していて欲しい)
- **自分の独自ドメインのサイトかっこよさそう**

## 構築

本当は[はてなブログ](https://hatenablog.com)のようなブログ投稿サービスでもよかったのですが，
今回は[Docusaurus](https://docusaurus.io/)で自前でホストするようにしました．
最初はNuxt3とかイケてそうなフレームワークを使って自分で開発からやろうと思ってましたが，私はweb系の技術を全く知らないので普通に挫折しました．
その分Docusaurusは設定を弄ればいい感じのページができるし，記事もMarkdownで書けるので今のところ文句はありません．

## Docusaurusセットアップ

::caution 以下はDocusaurusで構築したときの一初学者のつまづきポイントです．

先程Docusaurusは設定をいじればよいという話をしましたが，何もわからん勢にとって難しかった部分があったのでメモしておきます．

基本的には
```
npx create-docusaurus@latest "project_name" classic
```
のコマンドを打つだけでいいのですが，デフォルトだとドキュメント機能もついてくるので
[このドキュメント](https://docusaurus.io/docs/next/blog#blog-only-mode)
を参考に設定を変更します．
```js title="docusaurus.config.js"
module.exports = {
  // ...
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false, // Optional: disable the docs plugin
        blog: {
          routeBasePath: '/', // Serve the blog at the site's root
          /* other blog options */
        },
      },
    ],
  ],
};
```
それが終わったら
```
rm ./src/pages/index.js
```
で元々のトップページを消します．

…という手順なのですがこのまま`build`するとエラーが出ます．
恐らくdocsを無効にした影響でnavbarにデフォルトで置いてあるコンテンツが参照出来なくなってるっぽいので，
以下の場所にある`items`の中身を消しておきます．[^1]
```js title="docusaurus.config.js"
module.exports = {
  // ...
  themeConfig: 
  ({
      navbar: {
          items: [
            // ...
          ]
        }
    }
  )
};
```
これで問題なく動くはずです．

あとは記事を書いたうえで静的サイトホスティングのサービス等を使ってデプロイするだけです．

[^1]: navbarにコンテンツを追加したい場合はちゃんと参照できる`href`を置いてあげればよいです．
