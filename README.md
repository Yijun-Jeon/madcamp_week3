# <img src="https://user-images.githubusercontent.com/68576681/177258571-64e4855d-bdca-4335-b221-e23d54708cbe.jpg" width="30" height="30"> IFWE..
> 2분반 3주차(2022.07.12~07.19) By 이영준, 전이준
# Table Of Contents
* [Project Summary](#project-summary)
* [Developer Information](#developer-information)
* [Development Environment](#development-environment)
* [Website Information](#website-information)
  * [0. Loading](#0-loading)
  * [1. Home](#1-home)
  * [2. Screens](#2-screens)
***
# Project Summary
* 주전공이 경영학과, 컴퓨터교육과인 우리가 만약 개발자를 택하지 않았더라면?
* 미래를 극락편, 절망편으로 탭을 나누어 우리의 스토리를 담았습니다.
* 각 연대마다 스와이프 기능으로 2명의 이야기를 따로 볼 수 있습니다.
***
# Developer Information
* [이영준](https://github.com/leeyjwinter) (성균관대학교 컴퓨터교육학과)
* [전이준](https://github.com/Yijun-Jeon) (성균관대학교 글로벌경영학과)
***
# Development Environment
* Language: JavaScript, CSS
* Framework: React
* Target Device: All device
***
# Website Information
## 0. Loading
<img src="https://user-images.githubusercontent.com/89140546/178481682-cdc9b49d-1ae3-4772-af0b-73e135be01fc.jpg" width="200" height="400"> <img src="https://user-images.githubusercontent.com/89140546/178481705-bdda08f3-e06d-42b7-b6cf-ed3cea4c4731.jpg" width="200" height="400"> <img src="https://user-images.githubusercontent.com/89140546/178481706-0c754d17-279f-4c13-9a75-e01caa4d7660.jpg" width="200" height="400">
### Major Features
* 웹사이트 접속 시 주제를 압축한 단어를 보여주며 로딩화면을 구성합니다
### Technology Used
* useState와 useEffect를 활용하여 화면을 전환하고 구성합니다.
## 1. Home
<img src="https://user-images.githubusercontent.com/89140546/178481691-703589c5-24d0-4cb4-81bc-1d975641e8fa.jpg" width="200" height="400">  <img src="https://user-images.githubusercontent.com/89140546/178481696-bc3c2ec9-4693-4a25-b68a-56524f977ef8.jpg" width="200" height="400">
### Major Features
* 우측 상단의 극락, 절망을 누름에 따라 홈의 테마가 바뀌게 됩니다.
* 상단의 툴바와 우측의 토글 메뉴의 항목을 클릭하면 해당 스크립트로 이동하게 됩니다.
* 극락 탭에서 홈 이미지의 에어팟을 클릭하면 노래가 재생이 됩니다.
  * 더블 클릭하면 다음 노래로 바뀌게 됩니다.
### Technology Used
* State 변수와 조건문을 활용한 화면 전환
* Audio 객체로 음악 파일을 재생할 수 있는 객체 사용
## 2. Screens
<img src="https://user-images.githubusercontent.com/89140546/178481699-a31c1c6e-3691-4c3f-a686-1688657e5875.jpg" width="200" height="400">  <img src="https://user-images.githubusercontent.com/89140546/178481701-b0db7f1c-15ec-4833-b5fb-b67780273a2d.jpg" width="200" height="400">
### Major Features
* About : 출생부터 25세인 현재까지의 일대기를 설명합니다.
* 25 to 30s, 40s, 50s, 60s, 70s : 각 나이대별 미래를 상상하여 표현해보았습니다.
### Technology Used
* SwipeableViews를 사용하여 스와이프를 통해 둘의 스토리를 확인.
* CSS를 사용하여 동적인 이미지를 생성.
* 아이폰 이모지를 사용하여 각자의 얼굴을 생성하고 기존 이미지들에 합성.
