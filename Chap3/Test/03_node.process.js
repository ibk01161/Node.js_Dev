// process.argv
// 프로그램이 실행되고 10초 후 종료

process.argv.forEach(function (item, index) {
	// 출력
	console.log(index + ': ' + typeof (item) + ' : ', item);

	// 실행 매개변수에 --exit 가 있을 때
	if (item == '--exit') {
		// 다음 실행 매개변수를 얻음
		var exitTime = Number(process.argv[index + 1]);
		// 일정 시간 후 프로그램 종료
		setTimeout(function () {
			process.exit();
		}, exitTime);
	}
});