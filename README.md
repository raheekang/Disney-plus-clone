<aside>
📌 기획의도

</aside>

- 리액트를 활용하여 실제 홈페이지를 구성하게 되었으며, 그 중에서도 현재 활발히 다양한 사람들이 이용중인 ott서비스 웹페이지를 제작하게 되었습니다.
- 이전에 react의 다양한 기능들을 공부하며 실제 웹페이지를 구성하며 적용해보고 api, hooks, firebase 등 다양한 기능들을 접해보았으며 사용자의 입장, 개발자의 입장에서 웹페이지를 제작하였습니다.

<aside>
📌 이미지 및 분석

</aside>

![디즈니로그인](https://github.com/raheekang/Bingo-Game-react/assets/134080499/191069ad-a759-4c78-b2d0-33fae92cd229)

- 웹페이지 접속 시 로그인 화면
- 우측 상단 로그인 버튼, 중앙에 위치한 ‘지금가입’ 버튼 클릭 시 구글 이메일을 통하여 접속 할 수 있음

<aside>
✔️ firebase를 활용하여 모바일 웹 어플리케이션을 만들기 위해 구글에서 개발한 플랫폼을 활용하였음

</aside>

![디즈니메메메인](https://github.com/raheekang/Bingo-Game-react/assets/134080499/43b759ef-8a70-4b23-a08c-adcfbee86ad8)

- 로그인 후 메인 페이지 접속

<aside>
✔️ 외부 db를 활용하여 api key를 생성 후 movie data를 받아옴

</aside>

<aside>
✔️ 백엔드와 프론트엔드의 통신을 위해 axios를 활용

</aside>

![영화메뉴스와이퍼](https://github.com/raheekang/Bingo-Game-react/assets/134080499/0a41ec52-3bd2-4bbf-b484-d525c5424ed6)

- 웹페이지를 아래로 스크롤 할 시 보여지는 영화 이미지

<aside>
✔️ swiper 라이브러리를 활용하여 모바일, 웹 상에서 cursor를 활용하여 자유로운 이동이 가능하게 함

</aside>

![영화검색](https://github.com/raheekang/Bingo-Game-react/assets/134080499/2b05a67e-957e-43b3-8bb6-3e67a14576bf)

- search 부분을 통하여 영화 검색 가능

<aside>
✔️ 단어 하나하나 검색 시 불필요한 렌더링을 막기 위해 useDebounce hooks을 사용하였음

</aside>

- debounce function은 사용자가 미리 결정된 시간 동안 타이핑을 멈출 때까지 keyup 이벤트 처리를 지연
- ui 코드가 모든 이벤트를 처리할 필요가 없고 서버로 전송되는 api 호출 수도 크게 줄어듬

![영화상세페이지](https://github.com/raheekang/Bingo-Game-react/assets/134080499/74f71339-539a-42ea-bc9b-acd4b9eaeffc)

- 영화 클릭 시 상세 페이지 모달창
- 모달 창의 우측 상단의 ‘X’ , 모달 창 밖을 클릭 시 페이지가 닫혀짐

<aside>
✔️ useOnClickOutside hook을 사용하여 useRef 를 활용하여 모달 창 내부/외부를 구별하여 모달 창 외부 클릭 시 모달을 닫게 만드는 커스텀 hooks를 생성

</aside>

<aside>
✔️ useRef() 를 이용하여 Ref 객체를 만들고, 이 객체를 특정 dom에 ref 값으로 설정 → ref 객체의 .current 값이 특정 dom을 가리키게 됨

</aside>

![로그아웃버튼](https://github.com/raheekang/Bingo-Game-react/assets/134080499/335a11bf-e810-430f-8096-74dd5f1dfc3e)

- 우측 상단의 ‘sign out’ 버튼 클릭 시 처음 로그인 화면으로 돌아 갈 수 있음
