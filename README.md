# 2016 NTS 인턴 문제

## Question
1. 사원번호와 성적을 출력하는 프로그램을 만드시오.
2. input : java RecordMaker [count]
3. output : NT00002 80
4. 사원번호에서 NT는 바뀔 수 없고, 뒤의 다섯 자리는 random 숫자. random 값이 99999 이하면 0으로 채움.(30이라면 NT00030)
5. 사원번호 중복 안됨.
6. ex : RecordMaker 3

	> NT00002 80

	> NT11206 85

	> NT01321 15


## Pre Requirements

### Node.js
##### On Mac OS
```
$ brew install node
```

## Installation
```
$ npm install nts-recordmaker
```

## Useage

####Test Useage
```
$ cd node_modules/nts-recordmaker
$ npm test 3
```

####Npm Useage
```js
var nts = require('nts-recordmaker');

var employee = nts.makeEmployeeNum(5);

console.log(employee); // returns [ 'NT00001 5', 'NT00012 10', 'NT00016 55', 'NT00123 15', 'NT00111 52']
```