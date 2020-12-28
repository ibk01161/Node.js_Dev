// 모듈 추출
var os = require('os');

// 모듈 사용
console.log("호스트 이름 : " + os.hostname());						// 운영체제의 호스트 이름 리턴
console.log(os.type());							// 운영체제의 이름 리턴
console.log(os.platform());						// 운영체제의 플랫폼 리턴
console.log(os.arch());							// 운영체제의 아키텍처 리턴
console.log(os.release());						// 운영체제의 버전 리턴
console.log(os.uptime());						// 운영체제가 실행된 시간 리턴
console.log(os.loadavg());						// 로드 애버리지 정보를 담은 배열 리턴
console.log(os.totalmem());						// 시스템 총 메모리 리턴
console.log(os.cpus());							// CPU의 정보를 담은 객체 리턴
console.log(os.networkInterfaces());			// 네트워크 인터페이스의 정보를 담은 배열 리턴

