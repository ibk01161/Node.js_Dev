// supervisor 모듈 테스트

// 모듈 추출
var http = require('http');

// 서버 생성 후 실행
http.createServer(function (request, response) {
	response.write(200, { 'Content-Type': 'text/html' });
	response.end('<h1>Test - File - 2</h1>');
}).listen(52273, function () {
	console.log('http://127.0.0.1:52273 Server Start');
});