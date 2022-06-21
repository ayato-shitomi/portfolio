const	major = [
	"Unix開発",
	"Linux",
	"Ubuntu",
	"Debian",
	"Shell",
	"サーバー構築",
	"ネットワークセキュリティ",
	"ペネトレーションテスト",
	"Webページ作成",
	"Webアプリ開発",
	"バックエンド",
	"フロントエンド"
];

function outPutDataset(dataSet, id) {
	let	parent = document.getElementById(id);
	dataSet.forEach(item => {
		var	div = document.createElement("div");
		
		div.innerText = item;

		parent.appendChild(div);
	});
};
outPutDataset(major, "idMajor");