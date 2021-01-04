// EventEmitter 객체의 메소드

// EventEmitter 객체 생성
var EventEmitter = require('events');
var custom = new EventEmitter();

// 이벤트 연결
custom.on('tick', function(code) {
	console.log('이벤트 실행');
});

// 이벤트 강제 발생
custom.emit('tick');