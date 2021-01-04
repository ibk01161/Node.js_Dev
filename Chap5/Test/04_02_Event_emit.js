// 이벤트 강제 발생

// exit 이벤트 연결
process.on('exit', function (code) {
	console.log('이벤트 연결');
});

// 이벤트 강제 발생
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

// 프로그램 실행 중
console.log('프로그램 실행 중');