English translate
==================
## Demo(1min)
![egt-demo](https://raw.github.com/wiki/totoman/egt/images/egt-demo2.gif)
## Overview
英単語の学習効率を上げることを目的としたアプリケーションです。  
ネットサーフィンしている時など、調べた英単語をそのままにせずに  
その都度このアプリケーションに英単語と和訳を登録します。  
そうすることで後から見返す反復学習を可能とします。  
  
  
Twitter、Facebook、Email-Passwordで登録・ログインができます。  
  
## Usage
`config/initializers/devise.rb`  
`config/secrets.yml`  
`config/database.yml`  
`config/environments/development.rb`  
を各自で準備してください。  
その際、Twitter認証、Facebook認証の準備を進めてください。  
  
  
## Version
Ruby 2.1.2  
Rails 4.1.4  
Devise 3.2.4(bundle updateした際のバージョンでは動作未確認)  
  
  
## Licence
Copyright &copy; 2014 tkwn
