// HTTP 404 웹 페이지를 찾을 수 없습니다.

// 모듈 추출
var http = require('http');

// 52273 서버 생성 후 실행
http.createServer(function (request, response) {
	response.writeHead(404);
	response.end();
}).listen(52273, function() {
	console.log('127.0.0.1:52273 연결 성공');
});