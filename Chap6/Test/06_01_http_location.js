// Location 속성을 사용한 페이지 강제 이동

// 모듈 추출
var http = require('http');

// 52273 서버 생성 후 실행
http.createServer(function (request, response) {
	response.writeHead(302, {'Location' : 'https://www.naver.com/'});
	response.end();
}).listen(52273, function() {
	console.log('127.0.0.1:52273 연결 성공');
});