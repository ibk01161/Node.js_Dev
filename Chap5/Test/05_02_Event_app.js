// 프로그램 본체 (모듈 추출 후 tick 이벤트 연결)

// 모듈 추출
var rint = require('./05_03_Event_rint');

// 이벤트 연결
rint.timer.on('tick', function () {
	console.log('이벤트 실행~');
});