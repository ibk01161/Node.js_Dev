// method 속성을 사용한 페이지 구분

// 모듈 추출
var http = require('http');

// 52273 서버 생성 후 실행
http.createServer(function (request, response) {
	if (request.method == 'GET') {
		console.log('GET 요청');
	} else if (request.method == 'POST') {
		console.log('POST 요청');
	}
}).listen(52273, function() {
	console.log('127.0.0.1:52273 연결 성공');
});