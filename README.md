# コメントをremote:trueを使ってajax

1.scaffoldでビューを作成すると以下の記述がnew.html.hamlに現れる。
```ruby
= form_with(model: post, local: true) do |form|
```

```form_with```はrails5.1から導入されたもので、```form_tag```と```form_for```を統合したようなもの。
```form_with```は```remote:true```がデフォルトで設定されている。
ajaxを使いたくなければ```local:true```を書かなければならない。
オプションに```url: ~~```をつけられる。データの遷移先がこのURLになる。


