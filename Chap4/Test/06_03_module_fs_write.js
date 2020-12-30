// 모듈 추출
var fs = require('fs');

// 변수 선언
var data = "Hello world..";

// 모듈 사용
fs.writeFile('TextFileOtherWrite.txt', data, 'utf8', function (error) {
	console.log('Write File Async Complete');
});

fs.writeFileSync('TextFileOtherWriteSync.txt', data, 'utf8');
console.log('Wirte File Sync Complete');
