// 간단한 응답 메세지 작성

// 웹 서버를 생성하고 실행
require('http').createServer(function (request, response) {
	// 응답
	response.writeHead(200, { 'Context-Type' : 'text/html' });
	response.end('<h1>Hello Web Server with Node.js</h1>');
}).listen(52273, function() {
	console.log('127.0.0.1:52273 연결 성공');
});