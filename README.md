# ポートフォリオ

このリポジトリはポートフォリオ作成のためのリポジトリです。  
以下URLからアクセスできます。  
https://ayato-shitomi.github.io/portfolio/  

# 技術的解説

## ファイル階層

```
/home/ubuntu/Git_Web/portfolio
|
|--README.md
|--index.css
|--index.html
|
|--js
|  |--mobileRedirect.js
|  |--putAge.js
|
|--mobile.html
|
|--srcs
|  |--LabPixel.png
|  |--git.png
|  |--git_hover.png
|  |--instagram.png
|  |--instagram_hover.png
|  |--twitter.png
|  |--twitter_hover.png
```

## **モバイル**対応

モバイル対応するための遷移を以下のスクリプトによって実現してます。  
`userAgent`に、`iPhone`や`Android`が含まれていた場合に、`./mobile.html`に遷移します。  

`index.html`
```js
<script>
    function isSmartPhone(){
        if (navigator.userAgent.match(/iPhone|Android.+Mobile/)){
            document.location = "./mobile.html";
            return 0;
        }
        return 0;
    }
    isSmartPhone();
</script>
```

## 自分の名前横に年齢を**動的**表示

年齢は常に変化します。  
動的に要素を追加して年齢を表示させることで、余計な更新の手間を省きます。  

`index.html`
```js
<script>
    // 自身の生年月日の設定
    const birthday = {
        year: 2004,
        month: 11,
        date: 24
    };
    
    // 生年月日を計算する関数
    function getAge(birthday){
        var today = new Date();
        var thisYearsBirthday = new Date(today.getFullYear(), birthday.month-1, birthday.date);
        var age = today.getFullYear() - birthday.year;
        if(today < thisYearsBirthday){
            age--;
        }
        return age;
    }
    // div要素を自動的に作成
    var elmAge = document.createElement("div");
    // テキストノードを作成
    // 「(年齢)」の形になるように上で作った関数から年齢を取得
    var cntAge = document.createTextNode("(" + getAge(birthday) + ")");
    // 作成したdiv要素に年齢を入れる
    elmAge.appendChild(cntAge);
    elmAge.setAttribute("id","idMyAge");
    var parentDiv = document.getElementById("idIconAndName");
    parentDiv.appendChild(elmAge);
</script>
```

## キャリア部分の**未来へつながる**デザイン

水玉が並ぶデザインで未来へのつながりを表現しました。  
日時を表す際には`year/month`と`month`の2種類があります。  
`year/month`の方は大きい水玉を使用して、`month`のみは小さい水玉で表現します。  

`index.html`
```html
```
`index.css`
```css
```

## ギャラリー部分の**シンプル**の中での鮮やかさ

落ち着いたシンプルなデザインにしています。  
「クリックで表示」のホバー時のリンク色をオレンジにすることにより、鮮やかさを出します。  
リンクとホバー時のCSSは以下のようにしています。  

`index.css`
```css
```

## 連絡先リストのボタンデザイン

