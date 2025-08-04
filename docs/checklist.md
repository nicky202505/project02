# **프로젝트 완료 체크리스트**

https://frontendchecklist.io/

### **기본**

- [ ] 폴더구조,파일명 등이 보편적인지 확인  
- [ ] 깃페이지와 깃허브 혹은 닷홈과 깃허브 링크 확인

### **내용**

- [ ] 맞춤법  
- [ ] 한/영 맞춤법 , 오탈자 검사  
- [ ] 임시 컨텐츠  
      - [ ]  더미이미지/더미텍스트 제거하고 실제 컨텐츠로 변경  
- [ ] 푸터  
      - [ ]  상호, 주소, 담당자 연락처 정보(가상으로 작성)  
      - [ ]  개인정보취급방침 강조  
      - [ ]  사이트 이용정책  
      - [ ]  이용약관  
      - [ ]  쇼핑몰은 사업자번호 확인(가상으로 작성)  
- [ ] 저작권  
      - [ ]  저작권출처 표기를 해야하는 파일 사용시 저작권출처 표기확인  
- [ ] 전화번호,실명,주소등의 정보노출 이슈  
      - [ ]  컨텐츠에 작성한 전화번호, 담당자 실명, 기관 주소 등의 실제 정보 부분은 모두 가상의 정보로 수정한다. (010-555-3333)  
- [ ] 타이틀  
      - [ ]  title 태그의 컨텐츠 작성

### **기능**

- [ ] 파비콘  
      - [ ]  파비콘 체크  
- [ ] 오픈그래프/메타태그  
      - [ ]  **오픈그래프 및 메타태그 확인**  
- [ ] 로고  
      - [ ]  상단 로고 클릭시 메인페이지로 링크 되었는지 확인  
- [ ] 링크  
      - [ ]  내부링크는 현재 페이지에서 외부링크는 새 페이지에서 열리는지 확인(원래 사이트 링크 삭제)

### **웹표준/접근성**

- [ ] 웹표준검사  
      - [ ]  html 검사  
            [https://validator.w3.org/](https://validator.w3.org/)

       인증시 아이콘 주소  [https://www.w3.org/QA/Tools/Icons](https://www.w3.org/QA/Tools/Icons)

- [ ]  css 검사   
      [https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)  
- [ ] 검사 통과 후 아래의 코드를 푸터에 삽입

HTML 유효성 검사 

\<a href="[https://validator.w3.org/check?uri=내](https://validator.w3.org/check?uri=내)프로젝트1URL/"\>\<img src="https://user-images.githubusercontent.com/59301948/210939606-50ea4ba6-6817-45df-b5af-e220ab606c5b.png" alt="유효성검사"\>\</a\>

CSS 유효성 검사 

\<a href="https://jigsaw.w3.org/css-validator/validator?uri=내프로젝트주소"\>\<img src="https://jigsaw.w3.org/css-validator/images/vcss" alt="유효성검사"\>\</a\>

작성예시   
\<a href="https://validator.w3.org/check?uri=mangopub.cafe24.com"\>\<img src="https://www.w3.org/Icons/valid-html401" alt=""\>\</a\> \<a href="https://jigsaw.w3.org/css-validator/validator?uri=mangopub.cafe24.com"\>\<img 

src="https://jigsaw.w3.org/css-validator/images/vcss" alt=""\>\</a\>

- [ ] [웹접근성](https://accessibility.naver.com/accessibility) (일부선택)

       [네이버 접근성 페이지 : 접근성 가이드](https://accessibility.naver.com/accessibility)

      - [ ]  **스킵메뉴 (필수)**  
      - [ ]  **폰트사이즈(최소 16px) 행간(1.7 이상)**  
      - [ ]  [\*\*이미지태그에 alt 속성](https://accessibility.naver.com/acc/guide_01) (필수)\*\*  
      - [ ]  [\*\*명도대비](https://accessibility.naver.com/acc/guide_04)(필수)\*\* **WCAG Contrast checker**  
      - [ ]  IR 기법(image replacement) \-css 이미지의 대체텍스트 (선택)  
- [ ] h1  
      - [ ]  문서에 h1태그를 한개 넣었는가

### **기타**

- [ ]  주석문에 수업시간에 적은 내용 싹 다 지우기  
- [ ]  [속도체크](https://tools.pingdom.com/) C이상

