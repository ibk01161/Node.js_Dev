// 모듈 추출
var fs = require('fs');

// 모듈 사용
var text = fs.readFileSync('textfile.txt', 'utf8');
console.log(text);