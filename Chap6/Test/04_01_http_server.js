// 서버 생성 및 실행

// 모듈 추출
var fs = require('fs');
var http = require('http');

// 52273 서버 생성 후 실행
http.createServer(function (request, response) {

}).listen(52273, function() {
	console.log('127.0.0.1:52273 연결 성공');
});

// 52274 서버 생성 후 실행
http.createServer(function (request, response) {

}).listen(52274, function() {
	console.log('127.0.0.1:52274 연결 성공');
});