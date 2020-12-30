// 모듈 추출
var fs = require('fs');

// 파일 읽음
try {
	var data = fs.readFileSync('textfile.txt', 'utf8');
	console.log(data);
} catch (e) {
	console.log(e);
}

// 파일 쓰기
try {
	fs.writeFileSync('textfile.txt', 'Hello World..', 'utf8');
	console.log('File Write Complet');
} catch (e) {
	console.log(e);
}