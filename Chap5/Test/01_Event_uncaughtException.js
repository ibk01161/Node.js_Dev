// process 객체에 exit 이벤트를 연결
process.on('exit', function (code) {
	console.log('안녕히 가거라~');
});

// process 객체에 uncaughtException 이벤트를 연결
process.on('uncaughtException', function (error) {
	console.log('예외 발생!!!!');
});

// 2초 간격으로 3번 예외를 발생
var count = 0;
var test = function () {
	// 탈출 코드
	count = count + 1;
	if (count > 3) {
		return;
	}

	// 예외를 강제로 발생
	setTimeout(test, 2000);
	error.error.error();
};

setTimeout(test, 2000);