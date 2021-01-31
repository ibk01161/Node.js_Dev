// jade 모듈을 사용한 웹 서버 생성 및 실행

// 모듈 추출
var http = require('http');
var jade = require('jade');
var fs = require('fs');

// 서버 생성 후 실행
http.createServer(function (request, response) {
	// JadePage.ejs 파일 읽기
	fs.readFile('JadePage.jade', 'utf8', function (error, data) {
		// jade 모듈 사용
		var fn = jade.compile(data);
		// 출력
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.end(fn({
			name: 'RintIanTta',
			description: 'Hello jade With Node.js..!'
		}));
	});
}).listen(52273, function () {
	console.log('http://127.0.0.1:52273 Server Start');
});