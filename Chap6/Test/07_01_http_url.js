// url 속성을 사용한 페이지 구분

// 모듈 추출
var http = require('http');
var fs = require('fs');
var url = require('url');

// 52273 서버 생성 후 실행
http.createServer(function (request, response) {
	// 변수 선언
	var pathname = url.parse(request.url).pathname;

	// 페이지를 구분
	if (pathname == '/') {
		// Index.html 파일을 읽음
		fs.readFile('Index.html', function (error, data) {
			// 응답
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.end(data);
		});
	} else if (pathname == '/OtherPage') {
		// OtherPage.html 파일을 읽음
		fs.readFile('OtherPage.html', function (error, data) {
			// 응답
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.end(data);
		});
	}
}).listen(52273, function() {
	console.log('127.0.0.1:52273 연결 성공');
});