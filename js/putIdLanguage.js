const	language = [
	"Python",
	"C",
	"C++",
	"Go",
	"HTML CSS",
	"Java Script",
	"node.js",
	"Type Script",
	"PHP",
	"Ruby",
	"Ruby on Rails",
	"VBS"
];

function outPutDataset(dataSet, id) {
	let	parent = document.getElementById(id);
	dataSet.forEach(item => {
		var	div = document.createElement("div");
		
		div.innerText = item;

		parent.appendChild(div);
	});
};
outPutDataset(language, "idLanguage");