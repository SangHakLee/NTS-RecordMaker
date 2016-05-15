/**
 * 외부 모듈
 */



// 3. 아래를 구현하시오.  - 소스 코드를 붙여주세요. 만약, github/네이버 개발자 센터에 저장하였다면, URL도 공유해 주세요. - 자신 있는 Language로 작성하시면 됩니다.  문제 : 사원번호와 성적을 출력하는 프로그램을 만드시오.  실행 : ~> java RecordMaker [count]  동작 예 : ~> java RecordMaker 3
// NT00002 80 NT11206 85 NT01321 15  설명 : "사원번호공백점수"형태로 count 개의 줄이 출력되어야 합니다.  조건) - 사원번호에서 NT는 바뀔 수 없고, 뒤의 다섯 자리는 random 숫자. random 값이 99999 이하면 0으로 채움.(30이라면 NT00030) - 사원번호 중복 안됨.  - score는 0점 이상 100점 미만. random.  ** 이해되지 않는 부분이 있다면, 이해한 바대로 서술하고, 구현하시오.



!function makeEmployeeNum(){
	var random = Math.floor( Math.random() * 100000 );
	var digit = Math.floor(random / 10000);
	console.log('random', random);
	console.log('digit', digit);
}()