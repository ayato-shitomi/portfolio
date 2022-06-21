# ポートフォリオ

このリポジトリはポートフォリオ作成のためのリポジトリです。<br>
以下URLからアクセスできます。<br>
https://ayato-shitomi.github.io/portfolio/

# 技術的解説

## ファイル階層

```
/home/ubuntu/Git_Web/portfolio
|
|--js
|  |--mobileRedirect.js
|  |--putAge.js
|  |--putIdLanguage.js
|  |--putIdMajor.js
|
|--srcs
|  |--LabPixel.png
|  |--favicon.ico
|  |--git.png
|  |--git_hover.png
|  |--instagram.png
|  |--instagram_hover.png
|  |--twitter.png
|  |--twitter_hover.png
|
|--README.md
|--index.css
|--index.html
|--mobile.html
```

## **モバイル**対応

モバイル対応するための遷移を以下のスクリプトによって実現してます。<br>
`userAgent`に、`iPhone`や`Android`が含まれていた場合に、`./mobile.html`に遷移します。<br>

`mobileRedirect.js`
```js
function isSmartPhone(){
	if (navigator.userAgent.match(/iPhone|Android.+Mobile/)){
		document.location = "./mobile.html";
		return 0;
	}
	return 0;
}
isSmartPhone();
```

## 自分の名前横に年齢を**動的**表示

年齢は常に変化します。<br>
動的に要素を追加して年齢を表示させることで、余計な更新の手間を省きます。<br>

`putAge.js`
```js
// 自身の生年月日の設定
const birthday = {
	year: 2004,
	month: 11,
	date: 24
};

// 生年月日を計算する関数
function getAge(birthday){
	let today = new Date();
	let thisYearsBirthday = new Date(today.getFullYear(), birthday.month-1, birthday.date);
	let age = today.getFullYear() - birthday.year;
	if(today < thisYearsBirthday){
		age--;
	}
	return age;
}
// div要素を自動的に作成
let elmAge = document.createElement("div");
// テキストノードを作成
// 「(年齢)」の形になるように上で作った関数から年齢を取得
let cntAge = document.createTextNode("(" + getAge(birthday) + ")");
// 作成したdiv要素に年齢を入れる
elmAge.appendChild(cntAge);
elmAge.setAttribute("id","idMyAge");
let parentDiv = document.getElementById("idIconAndName");
parentDiv.appendChild(elmAge);
```

## キャリア部分の**未来へつながる**デザイン

水玉が並ぶデザインで未来へのつながりを表現しました。<br>
日時を表す際には`year/month`と`month`の2種類があります。<br>
`year/month`の方は大きい水玉を使用して、`month`のみは小さい水玉で表現します。<br>
前者には`classDateCircle`、後者には`classDateCircleMonth`というクラスをつけてます。<br>

`index.html`
```html
<div class="classCareerBox">
	<div class="classDateCircle">2020/04</div>
	<div class="classMsgCircle1">札幌光星高校 入学</div>
	<div class="classMsgCircle2">素晴らしい先生やカトリックなどの文化に触れて、後の人生観に影響を与える</div>
</div>
<div class="classCareerBox">
	<div class="classDateCircleMonth">09</div>
	<div class="classMsgCircle1">Tor Projectに参加</div>
	<div class="classMsgCircle2">Torブラウザー(OpenSorce)の日本語翻訳活動に参加</div>
</div>
```
`index.css`
```css
.classDateCircle {
	border-radius: 50%;
	background-color: rgba(195, 230, 250, 0.884);
	width: 90px;
	height: 90px;
	text-align: center;
	line-height: 90px;
}
.classDateCircleMonth {
	border-radius: 50%;
	background-color: rgba(195, 230, 250, 0.884);
	width: 50px;
	height: 50px;
	text-align: center;
	line-height: 50px;
	margin: 20 20 20 20;
}
```

## ギャラリー部分の**シンプル**の中での鮮やかさ

落ち着いたシンプルなデザインにしています。<br>
「クリックで表示」のホバー時のリンク色をオレンジにすることにより、鮮やかさを出します。<br>
リンクとホバー時のCSSは以下のようにしています。<br>

`index.css`
```css
.classBoxURL {
	text-decoration: none;
	border-bottom: 3px solid black;
	color: black;
}
.classBoxURL:hover {
	border-bottom: 3px solid orangered;
}
```

## 連絡先リストのボタンデザイン

連絡先リストの画像にホバーすると画像が変化します。<br>
2種類の画像を用意して、ホバーされたときに変更しています。<br>
以下の例のようにボタンには`classSNSButton`というクラスと`idButtonTwitter`というIDを割り当てています。<br>
クラスはボタンに共通するクラスで、ボタンの大きさを指定しています。<br>
IDではホバーされた際に`background`の`url`を変更することにより、画像が変わるようにしています。<br>

`index.html`
```html
<button class="classSNSButton" id="idButtonTwitter" onclick="window.open('https://twitter.com/AyatoShitomi/' + location.search)"></button>
```

`index.css`
```css
.classSNSButton {
	padding: 80;
	margin: 40;
	border: none;
}
#idButtonTwitter {
	background: url(srcs/twitter.png) no-repeat;
	background-size: cover;
	background-position: center center;
}
#idButtonTwitter:hover {
	background: url(srcs/twitter_hover.png) no-repeat;
	background-size: cover;
	background-position: center center;
}
```