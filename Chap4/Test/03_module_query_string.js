// 모듈 추출
var url = require('url');
var querystring = require('querystring');

// 모듈 사용
var parsedObject = url.parse('http://www.hanbit.co.kr/store/books/looki.php?p_code=B4250257160');

console.log(querystring.parse(parsedObject.query));

// url 모듈을 사용해 URL 문자열을 분해한 후 Query String 모듈로 쿼리 부분을 분해


