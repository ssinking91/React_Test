### 💫 React_Test(Jest)

---

```jsx
# npm install
yarn install 또는 yarn

# npm i <package> --save
yarn add <package>

# npm i <package> --save-dev
yarn add <package> --dev : --dev 옵션은 -D 와 같다.

# 패키지 삭제
yarn remove <package>

# dependencies와 devDependencies 모두 (package.json 에 명시된) version rule 에 따라 최신 버전으로 업그레이드.
# 만약 어떤 패키지가 semantic versioning([segVer](https://github.com/semver/semver/blob/master/semver.md))를
# 따르지 않는다면, version rule이 무색해져 하위 호환성이 보장되지 않는 업그레이드일 수도 있다.
yarn upgrade

# 특정 패키지를 특정 버전으로 업그레이드
yarn upgrade <package>@<version>

# 목록들 중에서 원하는 패키지만 최신버전으로 업그레이드하는 interactive terminal ui 를 제공한다.
yarn upgrade-interactive

# production 환경서 필요한 dependencies 만 설치
NODE_ENV=production yarn install 또는 yarn install --production
```

---

<br />

### 🛠 1. 테스팅의 이유

<br />

- ✔️ 왜 어플리케이션을 TEST 해야 할까?

> 간단하게 더 안정적인 어플리케이션을 위해서는 여러 방법으로 테스트를 해줘야 더 안정적인 어플리케이션이 될 수 있습니다.
> <br/>

<br />

- ✔️ 테스팅으로 얻는 이점은 무엇일까?

> (1) 디버깅 시간을 단축! 만약 데이터가 잘못 나왔다면 그것이 UI의 문제인지 DB의 문제인지등 전부 테스트를 해봐서 찾아야 하는데 테스팅 환경이 구축되어있다면 자동화 된 유닛 테스팅으로 특정 버그를 쉽게 찾아 낼 수있습니다.
> <br/>
>
> (2) 더욱 안정적인 어플리케이션! 많은 테스트 코드와 함께 작성된 코드의 어플
> 리케이션이 되기 때문에 훨씬 안정적인 어플리케이션이 됩니다.
> <br/>
>
> (3) 이밖에도 재설계 시간의 단축, 추가로 무언가를 더 구현해야 할 때 더 용이하
> 게 할 수 있는 등의 이점들이 있습니다.
> <br />

<br />

- ✔️ React Testing Library란 무엇인가?

  - Enzyme -> 구현 주도 테스트(Implementation Driven Test)

  - React Testing Library -> 행위 주도 테스트(Behavior Driven Test)

> React Testing Library는 React 구성 요소 작업을 위한 API를 추가하여 DOM Testing Library 위에 구축됩니다. DOM Testing Library란 Dom 노드(Node)를 테스트하기 위한 매우 가벼운 솔루션입니다. Create React App으로 생성된 프로젝트는 즉시 React Testing Library를 지원합니다. 그렇지 않은 경우 다음과 같이 npm을 통해 추가할 수 있습니다.<br/><br/>
> npm install --save-dev @testing-library/react<br/><br/>
> React Testing Library는 에어비앤비에서 만든 Enzyme을 대처하는 솔루션 입니다. Enzyme이 구성 요소의 구현 세부 정보를 테스트하는 대신 React Testing Library 개발자를 React 애플리케이션의 사용자 입니다.
> 구현 주도 테스트에서는 위의 UI를 테스트할 때 주로 `<p>` 태그가 쓰였고 Edit 등의 문자가 들어갔다는것을 테스트합니다. 그래서 만약 `<p>`태그를 `<h2>` 태그로 바뀌면 에러가 날 것입니다. 하지만 행동 주도 테스트에서는 사용자의 입장에서 테스트 하기에 `<p>`태그가 쓰이던 `<h3>` 태그가 쓰여서 글을 표현하는지가 중요한지 보다 어떠한 이벤트를 발생시켰을때 화면이 어떻게 변화가 되는지 같은 테스트가 더 주를 이루게 됩니다

<br />

- ✔️ Jest란 무엇인가?

  - FaceBook에 의해서 만들어진 테스팅 프레임 워크입니다. 최소한의 설정으로 동작하며 Test Case 를 만들어서 어플리케이션 코드가 잘 돌아가는지 확인해줍니다. 단위 (Unit) 테스트를 위해서 이용합니다.

  - Jest가 Test 파일을 찾는 방법 : `{filename}.test.js` / `{filename}.spec.js` / `All files inside " tests " folders`

  - Jest 파일 구조 & 사용법

    - "describe" : 여러 관련 테스트를 그룹화하는 블록을 만듭니다.

    - "it" : 개별 테스트를 수행하는 곳. 각 테스트를 작은 문장처럼 설명합니다.

    - "expect" : expect 함수는 값을 테스트할 때마다 사용됩니다. 그리고 expect 함수 혼자서는 거의 사용 되지 않으며 matcher와 함께 사용됩니다.

    - "matcher" : 다른 방법으로 값을 테스트 하도록 "matcher"를 사용합니다.

    - "render" : DOM에 컴포넌트를 랜더링하는 함수 / 인자로 랜더링할 React 컴포넌트가 들어감

    - 쿼리 함수 : 페이지에서 요소를 찾기 위해 테스트 라이브러리가 제공하는 방법 / 여러 유형의 쿼리("get", "find", "query") - 이들 간의 차이점은 요소가 발견되지 않으면 쿼리에서 오류가 발생하는지 또는 Promise를 반환하고 다시 시도하는지 여부

      - "getBy..." : 쿼리에 대해 일치하는 노드를 반환하고 **일치하는 요소가 없거나 둘 이상의 일치가 발견되면 설명 오류를 발생**시킵니다(둘 이상의 요소가 예상되는 경우 대신 getAllBy 사용).

      - "queryBy..." : 쿼리에 대해 일치하는 노드를 반환하고 **일치하는 요소가 없으면 null을 반환**합니다. 이것은 존재하지 않는 요소를 어설션하는 데 유용합니다. 둘 이상의 일치 항목이 발견되면 오류가 발생합니다(확인된 경우 대신 queryAllBy 사용).

      - "findBy..." : 주어진 쿼리와 **일치하는 요소가 발견되면 Promise를 반환**합니다. 요소가 발견되지 않거나 기본 제한 시간인 1000 후에 둘 이상의 요소가 발견되면 약속이 거부됩니다. 둘 이상의 요소를 찾아야 하는 경우 findAllBy를 사용하십시오. / `findBy = getBy + waitFor`

      - "waitFor" : 일정 기간 동안 기다려야 할 때 waitFor를 사용하여 기대가 통과할 때까지 기다릴 수 있습니다.

    <br />

<br />

### 🔨 2. 실행방법

- npx create-react-app react-test-app

<br/>

- npm install jest --save-dev

<br/>

- npm test

<br/>

- Eslint 설정 파일 생성

  1. package.json에 eslintConfig 부분 제거

  2. .eslintrc.json 파일 생성

  3. 일반적일때

     - eslint-plugin-react

     - eslint-plugin-react-hooks

  4. React_Test일때

     - eslint-plugin-testing-library : render로 Dom 그리는 부분

     - eslint-plugin-jest-dom : expect-matcher로 테스트

     - npm install eslint-plugin-testing-library eslint-plugin-jest-dom --save-dev

<br/>
