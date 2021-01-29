// ejs 모듈을 사용한 웹 서버 생성 및 실행 (데이터 전달)

// 모듈 추출
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

// 서버 생성 후 실행
http.createServer(function (request, response) {
	// ejsPage.ejs 파일 읽기
	fs.readFile('ejsPage_data.ejs', 'utf8', function (error, data) {
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.end(ejs.render(data, {
			name: 'RintIanTta',
			description: 'Hello ejs With Node.js...!'
		}));
	});
}).listen(52273, function () {
	console.log('http://127.0.0.1:52273 Server Start');
});