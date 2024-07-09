240423 참고

api 패치하기

1. redux, axios, redux-thunk 등 각종 패키지 설치
2. .env파일 만들어서 key 가져오기
3. reducer. action 작성하기
4. redux store 설정
5. redux provider 설정
6. components에서 redux 사용

chatGPT

설치: Redux, React-Redux, Redux-Thunk 패키지를 설치합니다.
액션 작성: 비동기 API 호출을 처리하는 액션 생성자를 작성합니다.
리듀서 작성: 액션에 따라 상태를 업데이트하는 리듀서를 작성합니다.
스토어 설정: Redux 스토어를 설정하고, Redux-Thunk 미들웨어를 적용합니다.
프로바이더 설정: 최상위 컴포넌트에서 Redux 스토어를 제공하도록 설정합니다.
컴포넌트에서 사용: Redux 상태와 액션을 컴포넌트에서 사용하여 데이터를 표시합니다.

작성 순서

API 설정 (api.js)
-axios 인스턴스 생성
axios 인스턴스란? 
동일한 설정을 여러 요청에 재사용 할 수 있는 기능
axios.craete로 생성 (객체에는 baseURL과 header 등)

왜 axios.create()를 사용하는가?
재사용 가능성: 동일한 설정을 여러 요청에 반복적으로 사용할 수 있습니다.
유지 보수성: 기본 설정을 한 곳에서 관리할 수 있어, 설정을 변경해야 할 때 모든 요청 코드를 수정할 필요가 없습니다.
코드의 일관성: 모든 요청에 일관된 설정이 적용되므로 코드의 일관성을 유지할 수 있습니다.

인터셉터를 사용하는 주된 이유는 다음과 같습니다:
로깅: 요청과 응답을 로그에 기록하여 디버깅과 모니터링을 용이하게 합니다.
공통 작업 수행: 모든 요청에 공통적으로 필요한 작업(예: 인증 토큰 추가, 오류 처리 등)을 중앙에서 수행할 수 있습니다.
응답 데이터 처리: 응답 데이터를 가로채어 필요한 변환이나 전처리를 수행할 수 있습니다.
그러나 단순히 API 요청을 수행하고 응답을 받는 경우에는 인터셉터를 반드시 설정할 필요는 없습니다. 인터셉터 없이도 Axios는 정상적으로 동작하며, API 요청을 수행하고 응답을 받을 수 있습니다.


Actions 작성 (actions/movieAction.js)
Reducer 작성 (reducers/movieReducer.js 및 reducers/index.js)
Store 설정 (store.js)
Redux Provider 설정 (src/index.js)
컴포넌트에서 Redux 사용 (src/SomeComponent.js)