// 모듈 추출
var fs = require('fs');

// 파일 읽음
fs.readFile('textfile.txt', 'utf8', function (error, data) {
	if (error) {
		console.log(error);
	} else {
		console.log(data);
	}
});

// 파일 쓰기
fs.writeFile('textfile.txt', 'Hello world!!!', 'utf8', function (error) {
	if (error) {
		console.log(error);
	} else {
		console.log('File Write Complete');
	}
});