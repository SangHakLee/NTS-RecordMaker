# 2016 NTS 인턴 문제

## 요구사항
1. 사원번호와 성적을 출력하는 프로그램을 만드시오.
2. input : java RecordMaker [count]
3. output : NT00002 80
4. 사원번호에서 NT는 바뀔 수 없고, 뒤의 다섯 자리는 random 숫자. random 값이 99999 이하면 0으로 채움.(30이라면 NT00030)
5. 사원번호 중복 안됨.
6. ex : RecordMaker 3

	> NT00002 80

	> NT11206 85

	> NT01321 15



## Installation
```
$ npm install nts-recordmaker
```

## Pre Requirements

### Node.js
##### On Mac OS
```
$ brew install node
```

## Useage
```
$ cd node_modules/nts-recordmaker
$ npm test 3
```