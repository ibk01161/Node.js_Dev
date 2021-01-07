// HTML 파일 제공

// 모듈 추출
var fs = require('fs');
var http = require('http');

// 서버 생성 후 실행
http.createServer(function (request, response) {
	// HTML 파일 읽음
	fs.readFile('HTMLPage.html', function (error, data) {
		response.writeHead(200, { 'Context-Type' : 'text/html' });
		response.end(data);
	});
}).listen(52273, function () {
	console.log('127.0.0.1:52273 연결 성공');
})