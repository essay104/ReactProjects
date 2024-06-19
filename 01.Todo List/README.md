### TodoList 만드는 순서

# 1. Header 컴포넌트를 만든다. 헤더에는 날짜가 표시되며 newDate객체를 생성후 toDateString함수로 오늘 날짜를 표시한다.

# 2. TodoEditor 컴포넌트를 만든다. TodoEditor는 onCreate함수를 props로 받는다. onCreate함수는 객체(Todo)를 생성하는 함수이다. useRef를 사용해서 id값을 저장한다. setTodo로 상태변화를 관리한다.

# 3. TodoEditor 내부의 input태그에 useRef를 달아 관리한다. conChange로 onChangeContent함수를 넣고 onChangeContent를 만든다.

# 4. TodoEditor 내부의 button태그에 onClick에 onSubmit함수를 만든다.

# 5. TodoList 컴포넌트를 만들고 todo와 onUpdate, onDelete함수를 props로 전달한다.

# 6. TodoList 컴포넌트는 자식 컴포넌트로 TodoItem을 가진다. 검색을 할수있는 input태그와 전채를 감싸는 div태그를 만든다.

# 7. 검색 결과를 반환하는 함수인 getSearchResult 함수를 만들고 todo 목록을 필터링하여 반환한 getSearchResult에 map함수로 필터링된 todo 목록을 화면에 렌더링한다.

## 문제점

# props가 app->TodoList->TodoItem으로 복잡하게 전달되는 문제 TodoList에는 쓰이지 않는 프롭스를 TodoItem에 전달하기 위해 불필요하게 TodoList에도 프롭스를 전달해야한다.

## 해결법

# useContext, useReduce, useCallback들의 훅으로 프롭스를 최적화하여 관리한다.
