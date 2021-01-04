// 이벤트 연결

// exit 이벤트 연결
process.on('exit', function (code) {
	console.log('이벤트 연결');
});