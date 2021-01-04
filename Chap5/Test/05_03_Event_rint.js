// 이벤트를 생성할 모듈 파일

// EventEmitter 객체 생성
var EventEimtter = require('events');
exports.timer = new EventEimtter();


// 이벤트를 강제로 발생
setInterval(function() {
	exports.timer.emit('tick');
}, 1000);