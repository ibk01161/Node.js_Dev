// 52273번 포트의 이미지 파일 제공

// 모듈 추출
var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {
	// 이미지 파일 읽음
	fs.readFile('Kf2.jpg', function (error, data) {
		response.writeHead(200, { 'Content-Type' : 'image/jpeg' });
		response.end(data);
	});
}).listen(52273, function () {
	console.log('127.0.0.1:52273 연결 성공');
});