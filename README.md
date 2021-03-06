# github pages

最終的にgithub pagesに公開される

DEMO: https://k8shiro.github.io/react-docker-base/

# 使い方
※  プロジェクト名やユーザー名等は適宜書き換えること

- 初期構築時

```
docker-compose run --rm node sh -c "create-react-app react-cookie-history"
```

- 開発サーバ立ち上げ

```
docker-compose run --service-ports node ash -c "cd react-cookie-history; yarn start"
```

- パッケージ追加

```
docker-compose run --service-ports node ash -c "cd react-cookie-history; yarn add gh-pages"
```

- 公開用にbuild

package.jsonに以下を追記

```
"homepage": "https://k8shiro.github.io/react-docker-base"
```

build

```
docker-compose run --service-ports node ash -c "cd react-cookie-history; yarn build"
```

- githubpageで公開
※ gh-pages追加・buildが必要

```
docker-compose run --service-ports node ash -c "cd react-cookie-history; yarn run gh-pages --user 'k8shiro <my.github@mail.addr>' --repo https://github.com/k8shiro/react-docker-base -d build"
```
