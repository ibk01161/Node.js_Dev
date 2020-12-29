// 모듈 추출
var crypto = require('crypto');

// 변수 선언
var key = '비밀키 테스트';
var input = 'PASSWORD';

// 암호화
var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

// 암호화 해제
var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');

// 출력
console.log('원래 문자열 : ' + input);
console.log('암호화 : ' + cipheredOutput);
console.log('복호화 : ' + decipheredOutput);
