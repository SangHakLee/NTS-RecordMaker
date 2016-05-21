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
var RANDOM_MIN = 1;
var SCORE_MAX = 100;
var SCORE_MIN = 0;
var DIGIT_MAX = 5;
var PREFIX_EMPLOYEE = 'NT';
var EMPLOYEE_BASE_NUMBER = '0'



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



function run(){
	var argv = process.argv.slice(2);
	var count = argv[0]
	if( !count ){
		console.log('test mode : $node test [count]');
		process.exit(0);
	}else if(isNaN(count)) {
		console.log('test mode : argv must number value!');
		process.exit(0);
	}else{
		makeEmployeeNum(count);
	}
}

function makeEmployeeNum(count){
	var arr_employee_num = arrayWithNumbersAndPrefix(RANDOM_MAX).shuffle().slice(0, count);
	if(count > RANDOM_MAX){ // 예외처리 99999 넘는 숫자 들어오면 99999로 변경
		console.log('Max count is 99999 !!');
		count = RANDOM_MAX;
	}
	for(var i = 0 ; i < count ; i++){
		console.log( arr_employee_num[i] + ' ' + _random(SCORE_MAX, SCORE_MIN) );
	}
}



/**
 * [arrayWithNumbersAndPrefix 요구사항에 맞게 배열 내용 변경]
 * @param  {[type]} n [배열 크기]
 * @return {[type]}   [1..n 까지 prefix 추가된 배열]
 */
function arrayWithNumbersAndPrefix(n) {
  var arr = Array.apply(null, Array(n));
  return arr.map(function (x, i) {
  	i = (i+1).toString();
		while( i.length < DIGIT_MAX ){
			i = EMPLOYEE_BASE_NUMBER + i;
		}
  	return PREFIX_EMPLOYEE + i;
  });
};


/**
 * [shuffle 중복되지 않은 배열 뽑기 위한 셔플]
 * @return {[type]} [순서가 바뀐 배열]
 */
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