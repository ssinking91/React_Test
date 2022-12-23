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

  - 간단하게 더 안정적인 어플리케이션을 위해서는 여러 방법으로 테스트를 해줘야 더 안정적인 어플리케이션이 될 수 있습니다.

<br />

- ✔️ 테스팅으로 얻는 이점은 무엇일까?

  (1) 디버깅 시간을 단축! 만약 데이터가 잘못 나왔다면 그것이 UI의 문제인지 DB의 문제인지등 전부 테스트를 해봐서 찾아야 하는데 테스팅 환경이 구축되어있다면 자동화 된 유닛 테스팅으로 특정 버그를 쉽게 찾아 낼 수있습니다.
  <br/>

  (2) 더욱 안정적인 어플리케이션! 많은 테스트 코드와 함께 작성된 코드의 어플
  리케이션이 되기 때문에 훨씬 안정적인 어플리케이션이 됩니다.
  <br/>

  (3) 이밖에도 재설계 시간의 단축, 추가로 무언가를 더 구현해야 할 때 더 용이하
  게 할 수 있는 등의 이점들이 있습니다.

<br />

- ✔️ React Testing Library란 무엇인가?

  - Enzyme -> 구현 주도 테스트(Implementation Driven Test)

  - React Testing Library -> 행위 주도 테스트(Behavior Driven Test)

  - React Testing Library는 React 구성 요소 작업을 위한 API를 추가하여 DOM Testing Library 위에 구축됩니다. DOM Testing Library란 Dom 노드(Node)를 테스트하기 위한 매우 가벼운 솔루션입니다. Create React App으로 생성된 프로젝트는 즉시 React Testing Library를 지원합니다. 그렇지 않은 경우 다음과 같이 npm을 통해 추가할 수 있습니다.

    <br/>

        - npm install --save-dev @testing-library/react

    <br/>

  - `React Testing Library`는 에어비앤비에서 만든 `Enzyme을 대처하는 솔루션` 입니다. Enzyme이 구성 요소의 구현 세부 정보를 테스트하는 대신 `React Testing Library 개발자를 React 애플리케이션의 사용자` 입니다.

  - `구현 주도 테스트(Enzyme)`에서는 위의 UI를 테스트할 때 주로 `<p>` 태그가 쓰였고 Edit 등의 문자가 들어갔다는것을 테스트합니다. 그래서 만약 `<p>`태그를 `<h2>` 태그로 바뀌면 에러가 날 것입니다. 하지만 `행동 주도 테스트(React Testing Library)`에서는 사용자의 입장에서 테스트 하기에 `<p>`태그가 쓰이던 `<h3>` 태그가 쓰여서 글을 표현하는지가 중요한지 보다 어떠한 이벤트를 발생시켰을때 화면이 어떻게 변화가 되는지 같은 테스트가 더 주를 이루게 됩니다
    <br/>

- ✔️ Create React App으로 리액트 시작하기

  ```javascript
  npx create-react-app <프로젝트 이름>
  ```

  - 원래 create-react-app을 할떄 npm install -g create-react-app 이렇게 했었다. global 디렉토리에 다운받음

  - 이제는 `npx`를 이용하여 다운 받지 않고 사용가능하다.

<br />

- ✔️ [Jest란 무엇인가?](https://github.com/testing-library/jest-dom)

  - FaceBook에 의해서 만들어진 테스팅 프레임 워크입니다. 최소한의 설정으로 동작하며 Test Case 를 만들어서 어플리케이션 코드가 잘 돌아가는지 확인해줍니다. 단위 (Unit) 테스트를 위해서 이용합니다.

  - Jest가 Test 파일을 찾는 방법 : `{filename}.test.js` / `{filename}.spec.js` / `All files inside "tests" folders`

<br />

- ✔️ [Jest 파일 구조 & 사용법](https://github.com/testing-library/jest-dom#custom-matchers)

  - `"describe"` : 여러 관련 `테스트를 그룹화하는 블록`을 만듭니다.

  - `"it"` : `개별 테스트(test)를 수행하는 곳`. 각 테스트를 작은 문장처럼 설명합니다.

  - `"expect"` : expect 함수는 `값을 테스트할 때마다 사용`됩니다. 그리고 expect 함수 혼자서는 거의 사용 되지 않으며 `matcher와 함께 사용`됩니다.

  - `"matcher"` : `다른 방법으로 값을 테스트` 하도록 "matcher"를 사용합니다.

  - `"render"` : DOM에 `컴포넌트를 랜더링`하는 함수 / `인자로 랜더링할 React 컴포넌트( <App /> )가 들어감`

<br />

- ✔️ [Jest 쿼리함수 & 사용법](https://testing-library.com/docs/queries/about)

  - `쿼리 함수` : `페이지에서 요소를 찾기 위해` 테스트 라이브러리가 제공하는 방법 / 여러 유형의 쿼리`("get", "find", "query")` => 이들 간의 `차이점`은 요소가 발견되지 않으면 쿼리에서 오류가 발생하는지 또는 Promise를 반환하고 다시 시도하는지 여부

    - `"getBy..."` : 쿼리에 대해 `일치하는 노드를 반환`하고 **일치하는 요소가 없거나 둘 이상의 일치가 발견되면 설명 오류를 발생**시킵니다(`둘 이상의 요소`가 예상되는 경우 대신 `"getAllBy..."` 사용).

    - `"queryBy..."` : 쿼리에 대해 `일치하는 노드를 반환`하고 **일치하는 요소가 없으면 null을 반환**합니다. 이것은 존재하지 않는 요소를 어설션하는 데 유용합니다. `둘 이상의 일치 항목이 발견`되면 `오류가 발생`합니다(확인된 경우 대신 `"queryAllBy"...` 사용).

    - `"findBy..."` : 주어진 쿼리와 **일치하는 요소가 발견되면 Promise를 반환**합니다. 요소가 발견되지 않거나 기본 제한 시간인 1000 후에 둘 이상의 요소가 발견되면 약속이 거부됩니다. `둘 이상의 요소를 찾아`야 하는 경우 `"findAllBy..."`를 사용하십시오. / `findBy = getBy + waitFor`

    - `"waitFor"` : `일정 기간 동안 기다려야 할 때` waitFor를 사용하여 기대가 통과할 때까지 기다릴 수 있습니다.

    <br />

<p align="center">
  <img width="600" alt="[Jest_쿼리함수]" src="https://user-images.githubusercontent.com/89959952/208687527-4d51fce5-e766-4fb8-97ed-effe8d942500.png">
<p />

<br/>

---

<br/>

### 🔨 2. 실행방법

- **npm5 부터는 --save 옵션을 기본 옵션으로 적용한다. 즉, --save를 사용하지 않아도 dependencies에 항목을 추가된다.**

```javasciprt
✔️ npm
JavaScript용 Package Manager



✔️ npm init
패키지 의존성을 관리할 package.json 파일을 만드는 명령어



✔️ npm install (plugin)
npm으로 해당 프로젝트에 패키지(plugin)를 설치



✔️ npm install (plugin) --save
패키지(plugin)를 ./node_modules 디렉터리에 설치하고 ./package.json 파일의 dependencies 항목에 패키지 정보가 저장됩니다.
--production 빌드 시 해당 패키지가 포함됩니다.


✔️ npm install (plugin) --save-dev
패키지(plugin)을 ./node_modules 디렉터리에 설치하고 ./package.json 파일의 devDependencies 항목에 패키지 정보가 저장됩니다.
--production 빌드 시 해당 패키지는 포함되지 않습니다.
```

- 🔥 npx create-react-app react-test-app

<br/>

- 🔥 npm install jest --save-dev

<br/>

- 🔥 npm test

<br/>

- ✔️ Eslint 설정 파일 생성

  1. package.json에 eslintConfig 부분 제거

  2. .eslintrc.json 파일 생성

  3. Plugins : eslint에서 기본으로 제공하지 않는 다양한 규칙을 플러그인을 통해 사용할 수 있습니다.

     - eslint: ESLint 코어

     - eslint-plugin-react: React 관련 린트 설정을 지원

     - eslint-plugin-react-hooks: React Hooks의 규칙을 강제해주는 플러그인

     - eslint-plugin-import: ES2015+의 import/export 구문을 지원

     - eslint-plugin-jsx-a11y: JSX 내의 접근성 문제에 대해 즉각적인 AST린팅 피드백을 제공

     - eslint-config-prettier: prettier와 eslint의 충돌을 일으키는 ESLint 규칙들을 비활성화시켜주는 config

     - eslint-plugin-prettier: prettier에서 인식하는 오류를 ESLint가 출력 // 사용해도 되지만 비추

     - eslint-config-airbnb: airbnb사의 코딩규칙을 사용

     - npm eslint-plugin-react eslint-plugin-react-hooks eslint-config-prettier --save-dev

     - 내부 설정

       - env : **사전 정의된 전역 변수 사용을 정의** / 자주 사용되는 설정으로는 browser, node

       - parserOptions : **ESLint 사용을 위해 지원하려는 Javascript 언어 옵션을 지정**

       - plugins : **플러그인 추가** => 추가 할 때, eslint-plugin- 부분 생략 가능

       - extends : **규칙 설정** => 플러그인을 추가 한 후에 규칙을 정해줘야 사용 가능 / react를 위한 규칙 recommended는 추천이 되는 걸 사용

       - rule : **규칙 변경**

     - [ESLint 설정 살펴보기](https://velog.io/@kyusung/eslint-config-2)
     - [[React] ESLint Prettier 설정방법](https://any-ting.tistory.com/94)

  4. React_Test(Jest)일때

     - eslint-plugin-testing-library : `render로 Dom 그리는 부분`

     - eslint-plugin-jest-dom : `expect-matcher로 테스트`

     - npm install eslint-plugin-testing-library eslint-plugin-jest-dom --save-dev

     ```javascript
     // src/eslintrc.json

     {
        "plugins": ["testing-library", "jest-dom"],
        "extends": [
        "react-app",
        "react-app/jest",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended"
        ]
     }

     ```

<br/>

- ✔️ Prettier 설치 및 설정

  1. npm으로 설치 : 여러 개발자와 같은 포맷 유지에 더 좋음

  ```javascript
  {
  "singleQuote": false, // 문자열은 따옴표로 formatting
  "semi": true, // 코드 마지막에 세미콜른이 없게 formatting
  "useTabs": false, // 탭의 사용을 금하고 스페이스바 사용으로 대체하게 formatting
  "tabWidth": 2, // 들여쓰기 너비는 2칸
  "trailingComma": "all", // 객체나 배열 키:값 뒤에 항상 콤마를 붙히도록 formatting
  "printWidth": 80, // 코드 한줄이 maximum 80칸
  "arrowParens": "avoid", // 화살표 함수가 하나의 매개변수를 받을 때 괄호를 생략하게 formatting
  "endOfLine": "auto" // EoF 방식, OS별로 처리 방식이 다름
  }
  ```

  2. VSCODE 익스텐션으로 설치 : 혼자서 편하게 설치해서 사용하기 좋음

     - 설정 : Extension Settings 에서 설정 변경

<br/>

---

<br/>

### 💡 3. TDD

- ✔️ TDD : `Test Driven Development`

  - 실제 코드를 작성하기 전에 테스트 코드를 먼저 작성

  - 테스트 코드를 작성한 후 그 테스트 코드를 Pass 할 수 있는 실제 코드를 작성

- ✔️ TDD 장점

  1. TDD를 하므로 인해 많은 기능을 테스트하기에 `소스 코드에 안정감이 부여`된다.

  2. 실제 개발하면서 많은 시간이 소요되는 부분은 디버깅 부분이기에 TDD를 사용하면 `디버깅 시간이 줄어들고 실제 개발 시간도 줄어`듭니다.

  3. `소스 코드 하나하나를 더욱 신중`하게 짤 수 있기 때문에 깨끗한 코드가 나올 확률이 높습니다.

<br/>

---

<br/>

### ⚙️ 4. react-counter-test

- 🔥 `FireEvent API` : `유저가 발생시키는 액션(이벤트)에 대한 테스트`를 해야하는 경우 사용
- [FireEvent API 살펴보기](https://testing-library.com/docs/dom-testing-library/api-events)

```javascript
// App.js

import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <div>
          <button
            data-testid="minus-button"
            onClick={() => setCounter((count) => count - 1)}
            disabled={disabled}
          >
            -
          </button>
          <button
            data-testid="plus-button"
            onClick={() => setCounter((count) => count + 1)}
            disabled={disabled}
          >
            +
          </button>
        </div>
        <div>
          <button
            data-testid="on/off-button"
            style={{ backgroundColor: "blue" }}
            onClick={() => setDisabled((prev) => !prev)}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
```

<br/>

```javascript
// App.test.js

import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  // App 컴포넌트를 렌더링
  render(<App />);
  //screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때  ID로)
  const counterElement = screen.getByTestId("counter");
  // id가 counter인 엘레멘트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  // App 컴포넌트를 렌더링
  render(<App />);
  //screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때  ID로)
  const minusButtonElement = screen.getByTestId("minus-button");
  // id가 minus-button인 엘레멘트의 텍스트가 -인지 테스트
  expect(minusButtonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  // App 컴포넌트를 렌더링
  render(<App />);
  //screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때  ID로)
  const plusButtonElement = screen.getByTestId("plus-button");
  // id가 plus-button인 엘레멘트의 텍스트가 +인지 테스트
  expect(plusButtonElement).toHaveTextContent("+");
});

test("When the + button is pressed, the counter changes to 1", () => {
  // App 컴포넌트를 렌더링
  render(<App />);
  //screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때  ID로)
  const buttonElement = screen.getByTestId("plus-button");
  // fireEvent는 유저가 발생시키는 액션(이벤트)에 대한 테스트를 해야하는 경우 사용
  fireEvent.click(buttonElement);
  //screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때  ID로)
  const counterElement = screen.getByTestId("counter");
  // id가 counter인 엘레멘트의 텍스트가 1인지 테스트
  expect(counterElement).toHaveTextContent(1);
});

test("When the - button is pressed, the counter changes to -1", () => {
  // App 컴포넌트를 렌더링
  render(<App />);
  //screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때  ID로)
  const buttonElement = screen.getByTestId("minus-button");
  // fireEvent는 유저가 발생시키는 액션(이벤트)에 대한 테스트를 해야하는 경우 사용
  fireEvent.click(buttonElement);
  //screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때  ID로)
  const counterElement = screen.getByTestId("counter");
  // id가 counter인 엘레멘트의 텍스트가 -1인지 테스트
  expect(counterElement).toHaveTextContent(-1);
});

test("on/off button has blue color", () => {
  // App 컴포넌트를 렌더링
  render(<App />);
  //screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때  ID로)
  const buttonElement = screen.getByTestId("on/off-button");
  // on/off 버튼 color를 blue 확인
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("Prevent the -,+ button from being pressed when the on/off button is cliecked", () => {
  // App 컴포넌트를 렌더링
  render(<App />);
  //screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때  ID로)
  const onOffButtonElement = screen.getByTestId("on/off-button");
  // fireEvent는 유저가 발생시키는 액션(이벤트)에 대한 테스트를 해야하는 경우 사용
  fireEvent.click(onOffButtonElement);
  //screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때  ID로)
  const plusButtonElement = screen.getByTestId("plus-button");
  // on/off-button 클릭할 때, -, + 버튼을 못누르게 막기
  expect(plusButtonElement).toBeDisabled();
});
```

<br/>

---

<br/>

### 👀 [5. Query 사용 우선 순위](https://testing-library.com/docs/queries/about/#priority)

<br/>

<p align="center">
  <img width="600" alt="[Jest_쿼리함수]" src="https://user-images.githubusercontent.com/89959952/208687527-4d51fce5-e766-4fb8-97ed-effe8d942500.png">
<p />

<br/>

---

<br/>
