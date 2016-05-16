/**
 * 외부 모듈
 */



// 3. 아래를 구현하시오.
//
// - 소스 코드를 붙여주세요. 만약, github/네이버 개발자 센터에 저장하였다면, URL도 공유해 주세요.
// - 자신 있는 Language로 작성하시면 됩니다.
//
// 문제 : 사원번호와 성적을 출력하는 프로그램을 만드시오.
//
// 실행 : ~> java RecordMaker [count]
// 동작 예 : ~> java RecordMaker 3
// NT00002 80
// NT11206 85
// NT01321 15
//
// 설명 : "사원번호공백점수"형태로 count 개의 줄이 출력되어야 합니다.
//
// 조건)
// - 사원번호에서 NT는 바뀔 수 없고, 뒤의 다섯 자리는 random 숫자. random 값이 99999 이하면 0으로 채움.(30이라면 NT00030)
// - 사원번호 중복 안됨.
// - score는 0점 이상 100점 미만. random.



// ** 이해되지 않는 부분이 있다면, 이해한 바대로 서술하고, 구현하시오.



var RANDOM_MAX = 99999;
var RANDOM_MIN = 0;
var DIGIT_MAX = 5;
var PREFIX_EMPLOYEE = 'NT';

function _random(){
	return Math.floor(
		(Math.random() * ( RANDOM_MAX - RANDOM_MIN + 1) + RANDOM_MIN )
	);
}

function makeZeroBase(digit) {
	if( !isNaN(digit) ){
		var digit_string = digit.toString();
		while( digit_string.length < DIGIT_MAX ){
			digit_string = '0'+digit_string;
		}
		// console.log('숫자 ', digit_string)
		return digit_string;
	}else{
		// console.log('숫자 아님', digit)
		return null;
	}
}

function makeEmployeeNum(){
	var random = Math.floor( Math.random() * 100000 );
	var digit = Math.floor(random / 10000);

	console.log(PREFIX_EMPLOYEE + makeZeroBase( _random() ))

	return PREFIX_EMPLOYEE + makeZeroBase( _random() )
}

function run(){
	var argv = process.argv.slice(2);
	if( !argv[0] ){
		console.log('test mode : $node test [count]');
		// console.log('test mode : $node test [count]');
		process.exit(0);
	}else if(isNaN(argv[0])) {
		console.log('test mode : argv must number value!');
		process.exit(0);
	}else{
		// console.log('keep going');
		for(var i = 0 ; i < argv[0] ; i++){
			makeEmployeeNum();
		}

	}
}


module.exports.makeEmployeeNum = makeEmployeeNum;
module.exports.run = run;