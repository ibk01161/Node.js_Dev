// 쿠키 생성 및 추출

// 모듈 추출
var http = require('http');

// 모듈 사용
http.createServer(function (request, response) {
	// Get Cookie
	var cookie = request.headers.cookie;

	// Set Cookie
	response.writeHead(200, {
		'Content-Type' : 'text/html',
		'Set-Cookie' : ['name = RintIanTta', 'region = Seuol']			
	});

	// 응답
	response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
}).listen(52273, function () {
	console.log('127.0.0.1 서버 연결');
})
