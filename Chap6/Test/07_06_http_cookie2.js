// 쿠키 생성 및 추출

// 모듈 추출
var http = require('http');

// 모듈 사용
http.createServer(function (request, response) {
	// 쿠키가 있는지 확인
	if (request.headers.cookie) {
		// 쿠키를 추출하고 분해
		var cookie = request.headers.cookie.split(';').map(function (element) {
			var element = element.split('=');
			return {
				key: element[0],
				value: element[1]
			};
		});

		// 응답
		response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
	} else {
		// 쿠키 생성
		response.writeHead(200, {
			'Content-Type': 'text/html',
			'Set-Cookie': ['name = test', 'region = incheon']
		});

		// 응답
		response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
	}
}).listen(52273, function () {
	console.log('127.0.0.1 서버 연결');
})
