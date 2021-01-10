// POST 요청 데이터 추출

// 모듈 추출
var http = require('http');
var fs = require('fs');


// 모듈 사용
http.createServer(function (request, response) {
	if (request.method == 'GET') {
		// GET 요청
		fs.readFile('HTMLPage2.html', function (error, data) {
			response.writeHead(200, { 'Content-Type' : 'text/html' });
			response.end(data);
		});
	} else if (request.method == 'POST') {
		// POST 요청
		request.on('data', function (data) {
			response.writeHead(200, { 'Content-Type' : 'text/html' });
			response.end('<h1>' + data + '</h1>');
			console.log('POST Data : ', data);
		});
	}
}).listen(52273, function () {
	console.log('127.0.0.1 서버 접속 성공');
});