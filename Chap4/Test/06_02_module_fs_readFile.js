// 모듈 추출
var fs = require('fs');

// 모듈 사용
fs.readFile('textfile.txt', 'utf8', function (error, data) {
	console.log(data);	
});
