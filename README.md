# コメントをremote:trueを使ってajax

1. scaffoldでビューを作成すると以下の記述がnew.html.hamlに現れる。
```ruby
= form_with(model: post, local: true) do |form|
```

```form_with```はrails5.1から導入されたもので、```form_tag```と```form_for```を統合したようなもの。
```form_with```は```remote:true```がデフォルトで設定されている。
ajaxを使いたくなければ```local:true```を書かなければならない。
オプションに```url: ~~```をつけられる。データの遷移先がこのURLになる。

```rake routes```で```.:format```と書かれているURLはフォーマットを指定できる。
```.:format```の部分をhtmlかjsonかjsかxmlなどに書き換えたURLを指定すればいい。
フォーマットを指定する場合はコントローラに例えば以下の記述を行う

```ruby
respond_to do |format|
  format.html
  format.json
  format.js
end
```

htmlを指定した場合はビューファイルの```.html.haml```がレスポンスに返ってくる。
jsonを指定した場合はビューファイルフォルダ内の```.json.jbuilder```が返ってくる。

