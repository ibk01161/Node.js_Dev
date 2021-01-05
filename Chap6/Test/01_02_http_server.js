// server 객체의 close() 메소드
// 서버를 실행해 10초 후 서버를 종료

// 서버 생성
var server = require('http').createServer();

// 서버 실행
server.listen(52273, function () {
	console.log('Server Runnig at http://127.0.0.1:52273');
});

// 10초 후 함수 실행
var test = function() {
	// 서버 종료
	server.close();
};

setTimeout(test, 10000);