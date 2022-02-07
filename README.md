# 🧸 Toysrus_Clone (Back-End)
![7W_cloneCoding_tosrus_big](https://user-images.githubusercontent.com/87135478/146631765-eb519ec3-86aa-4788-8813-be02bc1fd666.jpg)


# 🗂 Summary
**항해99 4기, 클론코딩 주차**  
> \* Clone 대상 사이트 : [LOTTE Mart - Toysrus](http://toysrus.lottemart.com/)  
> \* Clone 페이지 : 로그인, 회원가입, 메인, 상품 상세, 장바구니  
> \* Clone 기능 : 로그인, 회원가입, 상품 노출, 상품 상세 조회, 상품 인기 순위, 장바구니 저장, 장바구니 조회  
  
- [\[사이트 바로가기\]](http://toysrus-clone-frontend.s3-website.ap-northeast-2.amazonaws.com/)  
- [\[시연영상 구경하기\]](https://youtu.be/xMYTOBW1igw)  

<br />

# 👥 멤버
- Back-end: [이한울](https://github.com/goodn911), [오규화](https://github.com/59-devv)
- Front-end: [김자운](https://github.com/jawoon816), [서민지](https://github.com/ireneeming)
- [\[Front-End Github\]](https://github.com/ireneeming/toysrusClone_FE)
<br />

# 🗓 프로젝트 기간
- 2021년 12월 13일 ~ 2021년 12월 18일 (6일 간)  
![readme_img1](https://user-images.githubusercontent.com/87135478/146631979-f7e5ad4e-43b8-4340-b9b4-70aa5cd48e3d.jpg)


<br />

# 🗺 ER Diagram
![스크린샷 2021-12-18 14 27 18](https://user-images.githubusercontent.com/87135478/146630402-4b82dedd-e90b-412d-b0cf-6305f28c93d4.png)



<br />

# ⚙️ 기술 스택

### Back-End

<div>
  <img src="https://img.shields.io/badge/JAVA-007396?style=for-the-badge&logo=java&logoColor=white">
  <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white">
  <img src="https://img.shields.io/badge/Springboot-6DB33F?style=for-the-badge&logo=Springboot&logoColor=white">
  <img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white">
  <img src="https://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black">
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
  <img src="https://img.shields.io/badge/aws-232F3E?style=for-the-badge&logo=AmazonAWS&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

</div>  

### Front-End

<div>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/aws-232F3E?style=for-the-badge&logo=AmazonAWS&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">  
  
</div>

<br />

# 📌 API 명세서

- 연애의 참견 API
    
    | 페이지 | 기능 | Method | URL | Request | Response |
    | --- | --- | --- | --- | --- | --- |
    | 회원정보 | 회원가입 | POST | /api/auth/signup | \{<br/>"name": "이한울",<br/>"username": "slkdglje",<br/>"domain": "naver.com",<br/>"password": "1234alsd",<br/>"passwordCheck": "1234alsd",<br/>"phone": "01012345678",<br/>"address": "서울 송파구 제2롯데"<br/>} | {<br/>result: "회원가입 성공"<br/>} | 
    |  | 로그인 | POST | /api/auth/login | {<br/>"username":"slkdglje@naver.com",<br/>"password":"1234alsd"<br/>} | {<br/>headers: { <br/> Authorization:<br/> token }<br/>} | 
    | 공통 | 로그인 정보 불러오기 | GET | /api/auth | { "Authorization" : token } | {<br/>result: "success",<br/>message: "로그인성공",<br/>username: "홍길동"<br/>} |    
    |  | 인기 순위 | GET | /api/item/ranking |  | {<br/>result: [ <br/>{<br/>itemName: "헬로카봇"<br/>},<br/>{<br/>itemName: "피카츄"<br/>}<br/>} |
    | 메인페이지 | 아이템리스트 | GET | /api/item?page={pageNo}&size={sieNo} |  | {<br/>result:  {<br/>timeLimitProducts: [<br/>{<br/>itemId : "1",<br/>itemName: "상품명",<br/>thumbnail : "이미지URL",<br/>price: "50000000원",<br/>discount: 25%,<br/>description: "설명"<br/>},<br/>....<br/>]<br/><br/>christmasProducts: [<br/>{<br/>itemId : "2",<br/>itemName: "상품명",<br/>thumbnail : "이미지URL",<br/>price: "50000000원"<br/>},<br/>....<br/>]<br/><br/>hotProducts: [<br/>{<br/>itemId : "3",<br/>itemName: "상품명",<br/>thumbnail : "이미지URL",<br/>price: "50000000원"<br/>},<br/>.....<br/>]<br/><br/>recommendProducts: {<br/>content: [<br/>{<br/>itemId : "4",<br/>itemName: "상품명",<br/>thumbnail : "이미지URL",<br/>price: "50000000원"<br/>},<br/>....<br/>]<br/>} |
    | 상세페이지 | item불러오기 | GET | /api/item/{itemId} |  | {<br/>result: <br/>{<br/>itemId : "1",<br/>itemName: "상품명",<br/>price: "50000000원",<br/>discount: 25%,<br/>thumbnail : "이미지URL",<br/>imgDetail: "상품Detail 이미지 URL"<br/>}<br/>} |
    |  | 장바구니에 저장 | POST | /api/cart | {<br/>itemId: "1",<br/>count: "2"<br/>} |  |
    | 장바구니 | 장바구니 보기 | GET | /api/cart |  | {<br/>result: {<br/>userInfo :<br/>{<br/>userId : "1",<br/>name: "홍길동",<br/>address: "서울시"<br/>},<br/><br/>items : [<br/>{<br/>itemId: "1",<br/>itemName: "상품명",<br/>price: "500000000원",<br/>count: "3",<br/>},<br/>{<br/>itemId: "4",<br/>itemName: "상품명",<br/>price: "500000000원",<br/>count: "2",<br/>},<br/>....<br/>]<br/>} |
  

<br />

# 🔑 페이지 설명

* **로그인 페이지**  
  \- 가입된 회원의 정보와 일치하는지 확인 후, 일치할 경우 로그인 성공  
  
* **회원가입 페이지**  
  \- 이름 : 사용자의 이름을 입력받음  
  \- 아이디 : Email주소의 @ 이전에 해당하는 아이디를 입력받음  
  \- 도메인 : 어떤 Email 도메인을 사용하는지를 입력받음  
  \- 비밀번호 : 영어 대소문자, 숫자, 특수문자 혼합 8-15자  
  \- 비밀번호 확인 : 위 비밀번호와 일치하는지 확인  
  \- 휴대폰번호 : 숫자만 입력 가능 / 11자 이상 입력 불가  
  \- 주소 : 사용자의 주소(배송지)를 입력받음  
  
* **메인 페이지**  
  \- 상품 조회 : 영역별 상품을 조회하고, 해당 상품을 클릭 시 상품 상세정보 페이지로 이동  
  \- 상품 랭킹 : 인기 상품을 최대 30개까지 순위별로 보여줌  
  
* **상품 상세정보**  
  \- 상품의 상세 정보를 조회할 수 있는 페이지  
  \- 상품의 수량을 선택하여 장바구니에 담을 수 있는 기능 제공  
  
* **장바구니**  
  \- 로그인 한 유저가 현재까지 장바구니에 담은 상품을 조회할 수 있음  

<br />

# 🔑 역할 담당
<details>
  <summary> 서민지  </summary>
  <br />
  <div>
    
    * [화면] 해더, 실시간 검색어, 메인 페이지, 장바구니
    * [기능] 메인페이지 부분(광고 슬라이드, 영상, 실시간 검색어), 로그인, 회원가입, 장바구니
  </div>
   
</details>
<details>
  <summary> 김자운 </summary>
  <br />
  <div>
    
    * [화면] 로그인, 회원가입, 상세페이지
    * [기능] 메인페이지, 상세페이지, 장바구니(수량변경, 수량에 따라 총가격 변경)
  </div>
   
</details>
<br />
# 💡 Trouble Shooting

<details>
  <summary> 1. 크롤링 한 상세페이지 상세이미지가 iframe 이어서 정확한 이미지 사이즈 문제 </summary>
  <br />
  <div>
    &nbsp;&nbsp;&nbsp;&nbsp;iframe 내부요소에 접근해서 이미지 비율을 변경해 주려 했는데, img width 값이 inline-style 로 잡혀있어서 수정 불가능하다 판단하여, 상세페이지 컨텐츠 영역     가로사이즈를 늘리는 방식으로 수정. 
  </div>
   
</details>
<details>
  <summary> 2. map함수를 사용하여 리스트를 뿌려줄때 TypeError: Cannot read property 'map' of undefined 라는 에러가 났다.  </summary>
  <br />
  <div>
    &nbsp;&nbsp;&nbsp;&nbsp;React 는 렌더링이 화면에 커밋 된 후에야 모든 효과를 실행하기 때문이다. 즉 React는 return에서 map(...)을 반복실행할 때 첫 턴에 데이터가 아직 안들어와도 렌더링이 실행되며 당연히 그 데이터는 undefined로 정의되어 오류가 나는 것이다. -> &&을 사용하여 조건이 참일 때만 실행이 되도록 변경해 주었다.
  </div>
   
</details>

<details>
  <summary> 3. 장바구니에서 수량변경을 할 때 수량 +-한 값을 dispatch한 다음 리덕스에서 수정한 데이터를 다시 받아오는 것으로 생각을 했었는데 데이터를 어떻게 화면에 다시 나오게 해야할지가 의문  </summary>
  <br />
  <div>
    &nbsp;&nbsp;&nbsp;&nbsp;리덕스에서 +-된 값을 list배열에 추가해 준 다음 useSelector로 데이터를 받아 사용
  </div>
   
</details>

# 💬 Question for Improvement

<details>
  <summary> 프로젝트 범위가 커질수록 어떻게 컴포넌트와 css 등 폴더/파일들을 관리해야 하나?? </summary>
  <br />
  <div>
   ?
  </div>
   
</details>

