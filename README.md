English translate
==================
  
  
概要
----
英単語の学習効率を上げることを目的としたアプリケーションです。  
ネットサーフィンしている時など、調べた英単語をそのままにせずに  
その都度このアプリケーションに英単語と和訳を登録します。  
そうすることで後から見返す反復学習を可能とします。  
  
  
Twitter、Facebook、Email-Passwordで登録・ログインができます。  
  
  
使い方
------
### ファイル ###
`config/initializers/devise.rb`  
`config/secrets.yml`  
`config/database.yml`  
`config/environments/development.rb`  
を各自で準備してください。  
その際、Twitter認証、Facebook認証の準備を進めてください。  
  
  
### 注意 ###
~~angular.js が入っておりますが一切使っておりません。~~  
~~(時間があるときに削除しておきます。)~~  
  
  
バージョン情報
----
Ruby 2.1.2  
Rails 4.1.4  
Devise 3.2.4(bundle updateした際のバージョンでは動作未確認)  
  
  
ライセンス
------
Copyright &copy; 2014 tkwn
