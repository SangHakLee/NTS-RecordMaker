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
var SCORE_MAX = 10;
var SCORE_MIN = 0;
var DIGIT_MAX = 5;
var PREFIX_EMPLOYEE = 'NT';



/**
 * [_random 최소~최대 범위 내의 임의의 숫자 ]
 * @param  {[type]} max [최대 범위]
 * @param  {[type]} min [최소 범위]
 * @return {[type]}     [랜덤으로 뽑은 숫자]
 */
function _random(max, min){
	return Math.floor(
		(Math.random() * ( max - min + 1) + min )
	);
}

function isDuplicate(num){
	arr_employee_num.push(num);
	for( i in arr_employee_num ){
		// if()
	}
	console.log('arr_employee_num : ', arr_employee_num);
	// return true;
}

/**
 * [makeZeroBase 최대 자리수만큼 0으로 채운다. ]
 * @param  {[type]} digit [기본 숫자]
 * @return {[type]}       [0으로 채워진 숫자]
 */
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

/**
 * [makeEmployeeNum 무작위 사원번호 생성]
 * @return {[type]} [NT000001 형태의 사원번호]
 */
function makeEmployeeNum(){
	var random = Math.floor( Math.random() * 100000 );
	var digit = Math.floor(random / 10000);

	// console.log(PREFIX_EMPLOYEE + makeZeroBase( _random() ))

	return PREFIX_EMPLOYEE + makeZeroBase( _random(RANDOM_MAX, RANDOM_MIN) )
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
		var arr_employee_num = fillArrayWithNumbers(99999).shuffle();

		// for(var i = 0 ; i < argv[0] ; i++){
		// 	console.log( makeEmployeeNum() + ' ' + _random(SCORE_MAX, SCORE_MIN) );
		// }
		console.log(fillArrayWithNumbers(99999).shuffle());
		console.log(fillArrayWithNumbers(99999).shuffle().length);
	}
}


// 중복 방지
// case 1. 셔플
function fillArrayWithNumbers(n) {
  var arr = Array.apply(null, Array(n));
  return arr.map(function (x, i) { return i+1 });
};
Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
  }
  return this;
};


module.exports.makeEmployeeNum = makeEmployeeNum;
module.exports.run = run;