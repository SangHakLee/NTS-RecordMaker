// 상수 정보
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

/**
 * [run 테스트 코드]
 * @return {[type]} [description]
 */
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
		var employee = makeEmployeeNum(count);
		for (var i = 0 ; i < employee.length ; i++){
			console.log(employee[i]);
		}
	}
}

/**
 * [makeEmployeeNum 요구사항대로 출력하기 위한 사원 정보 배열 생성]
 * @param  {[type]} count [출력할 수 ]
 * @return {[type]}       [ NT000001 100 정보 배열 ]
 */
function makeEmployeeNum(count){
	var employee = [];
	var arr_employee_num = arrayWithNumbersAndPrefix(RANDOM_MAX).shuffle().slice(0, count);
	if(count > RANDOM_MAX){ // 예외처리 99999 넘는 숫자 들어오면 99999로 변경
		console.log('Max count is 99999 !!');
		count = RANDOM_MAX;
	}
	for(var i = 0 ; i < count ; i++){
		employee.push(arr_employee_num[i] + ' ' + _random(SCORE_MAX, SCORE_MIN) );
	}
	return employee;
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