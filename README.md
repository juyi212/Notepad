# :: 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제

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
이번 사전 과제를 통해 도입하게 되었는데,  두 개의 큰 차이점은 없었다.  <br>
( 즉, SWR 도입했을 때 느낌은 편하고 정교하다였는데 그 느낌이 똑같다는 말!  )   

**<도입 후 느낀점>**
- 장황하지 않는 코드 ( 동일한 코드를 최소화 할 수 있었음 )
- api 요청 후 성공했을 시, 다시 업데이트해야할 부분들 키값으로 서버에 데이터 요청

참고 문서 : [https://tech.kakaopay.com/post/react-query-1/](https://tech.kakaopay.com/post/react-query-1/)




## 자기소개 
```
안녕하세요 저는 신입 프론트엔드 개발자 이주이입니다. 해당 과정을 통해서 
깊이있는 코드를 구현해보고싶고, 제가 짠 코드에대해 리뷰도 받고 싶어서 신청하게 되었습니다.
모두가 좋은 경험을 쌓으셨으면 좋겠습니다 :) 
```

## 구현된 기능 
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
 
## 구현이 필요한 사항들 
- 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
