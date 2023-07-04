function convertTextToHTML(text) {
	let html = '';
	let currentTag = '';

	const lines = text.split('\n');
	for (let line of lines) {
		// check if line is empty
		if (line.trim() === '') {
			continue;
		}
		// check if loop is in <ul>
		if (currentTag == "li") {
			if (!(line.startsWith("- "))) {
				html += '</ul>';
				currentTag = '';
			}
		} else if (currentTag == "table") {
			if (!(line.startsWith("| "))) {
				html += '</table>';
				currentTag = '';
			}
		}
		// make HTML element
		if (line.startsWith('# ')) {
			html += `<h1>${line.slice(2)}</h1>`;
			currentTag = "h1";
		} else if (line.startsWith('## ')) {
			html += `<h2>${line.slice(3)}</h2>`;
			currentTag = "h2";
		} else if (line.startsWith('### ')) {
			html += `<h3>${line.slice(4)}</h3>`;
			currentTag = "h3";
		} else if (line.startsWith("- ")) {
			if (currentTag == "li") {
				html += `<li>${line.slice(2)}</li>`;
			} else {
				html += `<ul><li>${line.slice(2)}</li>`;
			}
			currentTag = "li";
		} else if (line.startsWith("| ")) {
			if (currentTag == "table") {
				html += `<tr><td>${line.slice(2).split(", ")[0]}</td><td></td><td>${line.slice(2).split(", ")[1]}</td></tr>`;
			} else {
				html += `<table><tr><td>${line.slice(2).split(", ")[0]}</td><td></td><td>${line.slice(2).split(", ")[1]}</td></tr>`;
			}
			currentTag = "table";
		} else {
			html += line + '<br>';
		}
	}
	return html;
}

fetch('./../src/index.txt')
	.then(response => response.text())
	.then(text => {
		const html = convertTextToHTML(text);
		document.getElementById("main").innerHTML = html;
	})
	.catch(error => {
		console.error('ファイルの読み込みエラー:', error);
});
