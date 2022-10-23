# :: TodoList

원티드 프리온보딩 챌린지에 참가하여 만든 TodoList 입니다. <br>
기본적인 CRUD의 프로젝트에 Typescript와 React-Query를 적용하고 피드백을 받으며 코드의 품질을 높혀가는 과정으로 진행되었습니다. 
<br>
<br>

## :hammer: 실행 방법 
### Server 실행 
```
server $ yarn  
server $ yarn start # http://localhost:8080  
```

### Client 실행 
```
client $ yarn
client $ yarn start # http://localhost:3000
```


## :clipboard: 구현된 기능 
### 1 - Login / SignUp
- 로그인, 회원가입을 별도의 경로로 분리하여 개발.
- 이메일과 비밀번호의 유효성 확인 (이메일 조건 : 최소 @, . 포함 / 비밀번호 조건 : 8자 이상 입력 )
- 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 
- 로그인 후 홈화면으로 이동 
- 토큰은 로컬 스토리지에 저장되어 있고, 어떤 경로든 토큰이 있으면 로그인화면으로 진입 불가.
- 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 이동.

### 2 - Todo List
 - Todo 목록을 볼 수 있습니다.
 - Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
 - Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
 - Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
 - 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
 - 수정되는 내용 실시간 반영됨. 
 - 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.

<br> 

## :pencil2: 사용한 프레임워크 및 라이브러리 설명 

|   |설명|
|---|---|
|Typescript|undefined와 null을 최대한 사용하지 않았고, 함수의 목적을 조금 더 명확하게 하기위해 적절한 type들을 설정해주었습니다.|
|React|컴포넌트 기반의 화면 구성을 하였고, 이번에도 custome hooks을 만들면서 적절하게 컴포넌트를 분리하고 재사용성을 높이려고 노력하였습니다.|
|Axios|HTTP 비동기 통신|
|React-Query|cache 개념이 기반이된 react-query를 사용하면서 UI / Server State 분리하는 이유에 대해 고민하였고, 적용할 수 있었습니다.|
|Styled-Components|컴포넌트 스타일 지정을 위한 라이브러리|
|Redux| 적용중.. |


<br>

## 폴더 구조 
```
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── api
│   │   ├── auth.ts
│   │   └── todo.ts
│   ├── components
│   │   ├── AuthForm
│   │   │   ├── index.tsx
│   │   │   └── style.tsx
│   │   ├── Layout
│   │   │   └── index.tsx
│   │   ├── Spinner
│   │   │   └── index.tsx
│   │   ├── Todo
│   │   │   ├── index.tsx
│   │   │   └── style.tsx
│   │   ├── TodoDetail
│   │   │   ├── index.tsx
│   │   │   └── style.tsx
│   │   └── TodoFactory
│   │       ├── index.tsx
│   │       └── style.tsx
│   ├── hooks
│   │   ├── query
│   │   │   ├── auth.ts
│   │   │   └── todo.ts
│   │   └── useInput.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── pages
│   │   ├── Home
│   │   │   ├── index.tsx
│   │   │   └── style.tsx
│   │   ├── Login
│   │   │   ├── index.tsx
│   │   │   └── style.tsx
│   │   └── Signup
│   │       └── index.tsx
│   ├── react-app-env.d.ts
│   ├── redux
│   │   └── index.tsx
│   ├── reportWebVitals.ts
│   ├── routes
│   │   └── index.tsx
│   ├── setupTests.ts
│   ├── typings
│   │   └── db.ts
│   └── utils
│       └── auth.tsx
└── tsconfig.json
```
|폴더|용도|
|---|---|
|api|백엔드 서버와의 REST API 통신을 위한 Axios 코드|
|components|공통적으로 사용되고 있는 컴포넌트들|
|hooks|데이터를 받아와 처리하고 데이터와 연관된 state를 갖는다|
|pages|화면에 나타나는 페이지|
|redux| 적용중입니다.. |


### Refactoring 
**"API 호출 로직을 view 로직과 분리하는 것"** <br>
의무적으로하던 분리를 이번 강의를 통해서 이유를 알게 되었고, 다시 하나하나 관심사를 분리해야겠다는 마음으로 API 호출 로직과 view를 분리하였다. 
```
export const LoginAPI = async (body: EnterFormState) => {
    const { data } = await axios.post(`{basicURL}/login`, body)
    return data;
}
...
```
React-query 도입 후 아래 코드가 추가되었고, api파일과 분리하였다. 
( hooks/query/auth.ts )

```
export const useLogin = () => {
    const navigate = useNavigate()
    const {mutate, isLoading, error} = useMutation<AuthResponse, Error, IUserFormState>(LoginAPI, {
            onSuccess: (res) => {
                localStorage.setItem('token', res.token)
                navigate('/')
            }
        }) 
        return {
        mutate, isLoading, error
    }
  };
```


**"React-query 도입 전과 후"** <br>
SWR 을 사용해보았지만, react-query도 사용해 보고싶다는 생각을 하긴했다. <br>
이번 사진 과제를 통해 사용해보았는데, 이전에 SWR를 쓸 때보다 목적에 맞게 잘 사용한 느낌을 받았다..! <br>
아직 병아리 수준이긴 하지만, 클라이언트 사이드와 서버 사이드를 분리하여 상태관리를 한다는 것을 조금 더 체험하게 된 것같다. <br>

```
export const useUpdateTodo = () => {
    const queryClient = useQueryClient();
    const {mutate, isLoading, error} = useMutation<{ data: ITodoList }, Error, IToDoStateWithId>(updateTodo, {
        onSuccess: async() => {
            await queryClient.invalidateQueries(useGetTodoList.getKey(axiosHeader))
        }
    })
    return {
        mutate, isLoading, error
    }
  };
  
```
<br>

- 장황하지 않는 코드 ( 동일한 코드를 최소화 할 수 있었음 )
- api 요청 후 성공했을 시, 다시 업데이트해야할 부분들 키값으로 서버에 데이터 요청

참고 문서 : [https://tech.kakaopay.com/post/react-query-1/](https://tech.kakaopay.com/post/react-query-1/)

