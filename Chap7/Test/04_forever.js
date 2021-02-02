// forever 모듈 테스트

// 서버 생성 및 실행
require('http').createServer(function (request, response){ 
	if (request.url == '/') {
		// 응답
		response.write('<!DOCTYPE html>');
		response.write('<html>');
		response.write('<head>');
		response.write('	<title>Forever</title>');
		response.write('</head>');
		response.write('<body>');
		response.write('	<h1>Forever</h1>');
		response.write('</body>');
		response.write('</html>');
		response.end();
	} else {
		// 오류 발생
		error.error.error();
	}
}).listen(52273, function() {
	console.log('http://127.0.0.1:52273 start....');
});