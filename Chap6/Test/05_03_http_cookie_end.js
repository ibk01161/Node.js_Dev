// 쿠키 저장 및 출력

// 모듈 추출
var http = require('http');

// 52273 서버 생성 후 실행
http.createServer(function (request, response) {
	// 변수 선언
	var date = new Date();
	date.setDate(date.getDate() + 7);

	// 쿠키 입력
	response.writeHead(200, {
		'Content-Type' : 'text/html',
		'Set-Cookie': [
			'breakfaset = toast; Expires = ' + date.toUTCString(),
			'dinner = chicken'
		]
	});

	// 쿠키 출력
	response.end('<h1>' + request.headers.cookie + '</h1>');
}).listen(52273, function() {
	console.log('127.0.0.1:52273 연결 성공');
});