// 모듈 추출
var crypto = require('crypto');

// 해시 생성
var shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

// 출력
console.log('crypte_hash : ' + output);