## PHP REACT 보드 만들기

<p align='center'>
<img width='60%' src='https://user-images.githubusercontent.com/79993356/191678223-c16709e1-bc0d-456c-8171-c6338dcf0c82.png'>
</p>

## 🏠 이 프로젝트는?

AWS EC2로 서버를 엽니다.
PHP로 백엔드 API를 구성합니다.

React로 프론트 페이지를 구성해보는 프로젝트입니다.
S3를 통해서 이미지를 업로드하고 받아올 수 있습니다.

## 📌 서비스

-  자신이 원하는 게시글을 쓸 수 있습니다.
-  댓글도 작성할 수 있지요.


## 📌 시연 영상

클릭하면 영상으로 넘어갑니다

[<img src="https://user-images.githubusercontent.com/79993356/191680371-e73f37aa-bff9-4297-8390-14b20d1d50eb.png" width="800"></img>](https://youtu.be/JktXDpeS88E)

## ⚙️ 프로젝트를 해보려면?

프론트 코드와 백엔드 코드 모두 클론합니다.

[백엔드 코드](https://github.com/keinn51/q_board_server)

**1. EC2의 인스턴스를 만들어 서버를 엽니다**

아래의 링크들을 참고하면 서버와 PHP개발 환경을 설정하기 편리할 것입니다.

[Amazon Linux 2에 LAMP 웹 서버 설치](https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/ec2-lamp-amazon-linux-2.html)
[PHP 스톰 사용법](https://subin-0320.tistory.com/125)
[mysql과 PHP 연동하기](https://wikidocs.net/116746)

**2. 서버 환경변수**
 
```
MYSQL_HOST=...
MYSQL_PORT=...
MYSQL_USER=...
MYSQL_PW=...
S3_ACCESS_KEY=...
S3_SECRET_KEY=...
S3_BUCKET=...
```

**3. 프론트엔드**
```
IP_ADDRESS=...
```
