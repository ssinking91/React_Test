### π« React_Test(Jest)

---

```jsx
# npm install
yarn install λλ yarn

# npm i <package> --save
yarn add <package>

# npm i <package> --save-dev
yarn add <package> --dev : --dev μ΅μμ -D μ κ°λ€.

# ν¨ν€μ§ μ­μ 
yarn remove <package>

# dependenciesμ devDependencies λͺ¨λ (package.json μ λͺμλ) version rule μ λ°λΌ μ΅μ  λ²μ μΌλ‘ μκ·Έλ μ΄λ.
# λ§μ½ μ΄λ€ ν¨ν€μ§κ° semantic versioning([segVer](https://github.com/semver/semver/blob/master/semver.md))λ₯Ό
# λ°λ₯΄μ§ μλλ€λ©΄, version ruleμ΄ λ¬΄μν΄μ Έ νμ νΈνμ±μ΄ λ³΄μ₯λμ§ μλ μκ·Έλ μ΄λμΌ μλ μλ€.
yarn upgrade

# νΉμ  ν¨ν€μ§λ₯Ό νΉμ  λ²μ μΌλ‘ μκ·Έλ μ΄λ
yarn upgrade <package>@<version>

# λͺ©λ‘λ€ μ€μμ μνλ ν¨ν€μ§λ§ μ΅μ λ²μ μΌλ‘ μκ·Έλ μ΄λνλ interactive terminal ui λ₯Ό μ κ³΅νλ€.
yarn upgrade-interactive

# production νκ²½μ νμν dependencies λ§ μ€μΉ
NODE_ENV=production yarn install λλ yarn install --production
```

---

<br />

### π  1. νμ€νμ μ΄μ 

<br />

- βοΈ μ μ΄νλ¦¬μΌμ΄μμ TEST ν΄μΌ ν κΉ?

  - κ°λ¨νκ² λ μμ μ μΈ μ΄νλ¦¬μΌμ΄μμ μν΄μλ μ¬λ¬ λ°©λ²μΌλ‘ νμ€νΈλ₯Ό ν΄μ€μΌ λ μμ μ μΈ μ΄νλ¦¬μΌμ΄μμ΄ λ  μ μμ΅λλ€.

<br />

- βοΈ νμ€νμΌλ‘ μ»λ μ΄μ μ λ¬΄μμΌκΉ?

  (1) λλ²κΉ μκ°μ λ¨μΆ! λ§μ½ λ°μ΄ν°κ° μλͺ» λμλ€λ©΄ κ·Έκ²μ΄ UIμ λ¬Έμ μΈμ§ DBμ λ¬Έμ μΈμ§λ± μ λΆ νμ€νΈλ₯Ό ν΄λ΄μ μ°ΎμμΌ νλλ° νμ€ν νκ²½μ΄ κ΅¬μΆλμ΄μλ€λ©΄ μλν λ μ λ νμ€νμΌλ‘ νΉμ  λ²κ·Έλ₯Ό μ½κ² μ°Ύμ λΌ μμμ΅λλ€.
  <br/>

  (2) λμ± μμ μ μΈ μ΄νλ¦¬μΌμ΄μ! λ§μ νμ€νΈ μ½λμ ν¨κ» μμ±λ μ½λμ μ΄ν
  λ¦¬μΌμ΄μμ΄ λκΈ° λλ¬Έμ ν¨μ¬ μμ μ μΈ μ΄νλ¦¬μΌμ΄μμ΄ λ©λλ€.
  <br/>

  (3) μ΄λ°μλ μ¬μ€κ³ μκ°μ λ¨μΆ, μΆκ°λ‘ λ¬΄μΈκ°λ₯Ό λ κ΅¬νν΄μΌ ν  λ λ μ©μ΄ν
  κ² ν  μ μλ λ±μ μ΄μ λ€μ΄ μμ΅λλ€.

<br />

- βοΈ React Testing Libraryλ λ¬΄μμΈκ°?

  - Enzyme -> κ΅¬ν μ£Όλ νμ€νΈ(Implementation Driven Test)

  - React Testing Library -> νμ μ£Όλ νμ€νΈ(Behavior Driven Test)

  - React Testing Libraryλ React κ΅¬μ± μμ μμμ μν APIλ₯Ό μΆκ°νμ¬ DOM Testing Library μμ κ΅¬μΆλ©λλ€. DOM Testing Libraryλ Dom λΈλ(Node)λ₯Ό νμ€νΈνκΈ° μν λ§€μ° κ°λ²Όμ΄ μλ£¨μμλλ€. Create React AppμΌλ‘ μμ±λ νλ‘μ νΈλ μ¦μ React Testing Libraryλ₯Ό μ§μν©λλ€. κ·Έλ μ§ μμ κ²½μ° λ€μκ³Ό κ°μ΄ npmμ ν΅ν΄ μΆκ°ν  μ μμ΅λλ€.

  <br/>

      - npm install --save-dev @testing-library/react

  <br/>

  - React Testing Libraryλ μμ΄λΉμ€λΉμμ λ§λ  Enzymeμ λμ²νλ μλ£¨μ μλλ€. Enzymeμ΄ κ΅¬μ± μμμ κ΅¬ν μΈλΆ μ λ³΄λ₯Ό νμ€νΈνλ λμ  React Testing Library κ°λ°μλ₯Ό React μ νλ¦¬μΌμ΄μμ μ¬μ©μ μλλ€.

  - κ΅¬ν μ£Όλ νμ€νΈμμλ μμ UIλ₯Ό νμ€νΈν  λ μ£Όλ‘ `<p>` νκ·Έκ° μ°μκ³  Edit λ±μ λ¬Έμκ° λ€μ΄κ°λ€λκ²μ νμ€νΈν©λλ€. κ·Έλμ λ§μ½ `<p>`νκ·Έλ₯Ό `<h2>` νκ·Έλ‘ λ°λλ©΄ μλ¬κ° λ  κ²μλλ€. νμ§λ§ νλ μ£Όλ νμ€νΈμμλ μ¬μ©μμ μμ₯μμ νμ€νΈ νκΈ°μ `<p>`νκ·Έκ° μ°μ΄λ `<h3>` νκ·Έκ° μ°μ¬μ κΈμ νννλμ§κ° μ€μνμ§ λ³΄λ€ μ΄λ ν μ΄λ²€νΈλ₯Ό λ°μμμΌ°μλ νλ©΄μ΄ μ΄λ»κ² λ³νκ° λλμ§ κ°μ νμ€νΈκ° λ μ£Όλ₯Ό μ΄λ£¨κ² λ©λλ€

<br />

- βοΈ Jestλ λ¬΄μμΈκ°?

  - FaceBookμ μν΄μ λ§λ€μ΄μ§ νμ€ν νλ μ μν¬μλλ€. μ΅μνμ μ€μ μΌλ‘ λμνλ©° Test Case λ₯Ό λ§λ€μ΄μ μ΄νλ¦¬μΌμ΄μ μ½λκ° μ λμκ°λμ§ νμΈν΄μ€λλ€. λ¨μ (Unit) νμ€νΈλ₯Ό μν΄μ μ΄μ©ν©λλ€.

  - Jestκ° Test νμΌμ μ°Ύλ λ°©λ² : `{filename}.test.js` / `{filename}.spec.js` / `All files inside " tests " folders`

  - Jest νμΌ κ΅¬μ‘° & μ¬μ©λ²

    - "describe" : μ¬λ¬ κ΄λ ¨ νμ€νΈλ₯Ό κ·Έλ£Ήννλ λΈλ‘μ λ§λ­λλ€.

    - "it" : κ°λ³ νμ€νΈλ₯Ό μννλ κ³³. κ° νμ€νΈλ₯Ό μμ λ¬Έμ₯μ²λΌ μ€λͺν©λλ€.

    - "expect" : expect ν¨μλ κ°μ νμ€νΈν  λλ§λ€ μ¬μ©λ©λλ€. κ·Έλ¦¬κ³  expect ν¨μ νΌμμλ κ±°μ μ¬μ© λμ§ μμΌλ©° matcherμ ν¨κ» μ¬μ©λ©λλ€.

    - "matcher" : λ€λ₯Έ λ°©λ²μΌλ‘ κ°μ νμ€νΈ νλλ‘ "matcher"λ₯Ό μ¬μ©ν©λλ€.

    - "render" : DOMμ μ»΄ν¬λνΈλ₯Ό λλλ§νλ ν¨μ / μΈμλ‘ λλλ§ν  React μ»΄ν¬λνΈκ° λ€μ΄κ°

    - μΏΌλ¦¬ ν¨μ : νμ΄μ§μμ μμλ₯Ό μ°ΎκΈ° μν΄ νμ€νΈ λΌμ΄λΈλ¬λ¦¬κ° μ κ³΅νλ λ°©λ² / μ¬λ¬ μ νμ μΏΌλ¦¬("get", "find", "query") - μ΄λ€ κ°μ μ°¨μ΄μ μ μμκ° λ°κ²¬λμ§ μμΌλ©΄ μΏΌλ¦¬μμ μ€λ₯κ° λ°μνλμ§ λλ Promiseλ₯Ό λ°ννκ³  λ€μ μλνλμ§ μ¬λΆ

      - "getBy..." : μΏΌλ¦¬μ λν΄ μΌμΉνλ λΈλλ₯Ό λ°ννκ³  **μΌμΉνλ μμκ° μκ±°λ λ μ΄μμ μΌμΉκ° λ°κ²¬λλ©΄ μ€λͺ μ€λ₯λ₯Ό λ°μ**μν΅λλ€(λ μ΄μμ μμκ° μμλλ κ²½μ° λμ  getAllBy μ¬μ©).

      - "queryBy..." : μΏΌλ¦¬μ λν΄ μΌμΉνλ λΈλλ₯Ό λ°ννκ³  **μΌμΉνλ μμκ° μμΌλ©΄ nullμ λ°ν**ν©λλ€. μ΄κ²μ μ‘΄μ¬νμ§ μλ μμλ₯Ό μ΄μ€μνλ λ° μ μ©ν©λλ€. λ μ΄μμ μΌμΉ ν­λͺ©μ΄ λ°κ²¬λλ©΄ μ€λ₯κ° λ°μν©λλ€(νμΈλ κ²½μ° λμ  queryAllBy μ¬μ©).

      - "findBy..." : μ£Όμ΄μ§ μΏΌλ¦¬μ **μΌμΉνλ μμκ° λ°κ²¬λλ©΄ Promiseλ₯Ό λ°ν**ν©λλ€. μμκ° λ°κ²¬λμ§ μκ±°λ κΈ°λ³Έ μ ν μκ°μΈ 1000 νμ λ μ΄μμ μμκ° λ°κ²¬λλ©΄ μ½μμ΄ κ±°λΆλ©λλ€. λ μ΄μμ μμλ₯Ό μ°ΎμμΌ νλ κ²½μ° findAllByλ₯Ό μ¬μ©νμ­μμ€. / `findBy = getBy + waitFor`

      - "waitFor" : μΌμ  κΈ°κ° λμ κΈ°λ€λ €μΌ ν  λ waitForλ₯Ό μ¬μ©νμ¬ κΈ°λκ° ν΅κ³Όν  λκΉμ§ κΈ°λ€λ¦΄ μ μμ΅λλ€.

    <br />

<br/>

---

<br/>

### π¨Β 2. μ€νλ°©λ²

- **npm5 λΆν°λ --save μ΅μμ κΈ°λ³Έ μ΅μμΌλ‘ μ μ©νλ€. μ¦, --saveλ₯Ό μ¬μ©νμ§ μμλ dependenciesμ ν­λͺ©μ μΆκ°λλ€.**

```javasciprt
βοΈ npm
JavaScriptμ© Package Manager



βοΈ npm init
ν¨ν€μ§ μμ‘΄μ±μ κ΄λ¦¬ν  package.json νμΌμ λ§λλ λͺλ Ήμ΄



βοΈ npm install (plugin)
npmμΌλ‘ ν΄λΉ νλ‘μ νΈμ ν¨ν€μ§(plugin)λ₯Ό μ€μΉ



βοΈ npm install (plugin) --save
ν¨ν€μ§(plugin)λ₯Ό ./node_modules λλ ν°λ¦¬μ μ€μΉνκ³  ./package.json νμΌμ dependencies ν­λͺ©μ ν¨ν€μ§ μ λ³΄κ° μ μ₯λ©λλ€.
--production λΉλ μ ν΄λΉ ν¨ν€μ§κ° ν¬ν¨λ©λλ€.


βοΈ npm install (plugin) --save-dev
ν¨ν€μ§(plugin)μ ./node_modules λλ ν°λ¦¬μ μ€μΉνκ³  ./package.json νμΌμ devDependencies ν­λͺ©μ ν¨ν€μ§ μ λ³΄κ° μ μ₯λ©λλ€.
--production λΉλ μ ν΄λΉ ν¨ν€μ§λ ν¬ν¨λμ§ μμ΅λλ€.
```

- npx create-react-app react-test-app

<br/>

- npm install jest --save-dev

<br/>

- npm test

<br/>

- βοΈ Eslint μ€μ  νμΌ μμ±

  1. package.jsonμ eslintConfig λΆλΆ μ κ±°

  2. .eslintrc.json νμΌ μμ±

  3. Plugins : eslintμμ κΈ°λ³ΈμΌλ‘ μ κ³΅νμ§ μλ λ€μν κ·μΉμ νλ¬κ·ΈμΈμ ν΅ν΄ μ¬μ©ν  μ μμ΅λλ€.

     - eslint: ESLint μ½μ΄

     - eslint-plugin-react: React κ΄λ ¨ λ¦°νΈ μ€μ μ μ§μ

     - eslint-plugin-react-hooks: React Hooksμ κ·μΉμ κ°μ ν΄μ£Όλ νλ¬κ·ΈμΈ

     - eslint-plugin-import: ES2015+μ import/export κ΅¬λ¬Έμ μ§μ

     - eslint-plugin-jsx-a11y: JSX λ΄μ μ κ·Όμ± λ¬Έμ μ λν΄ μ¦κ°μ μΈ ASTλ¦°ν νΌλλ°±μ μ κ³΅

     - eslint-config-prettier: prettierμ eslintμ μΆ©λμ μΌμΌν€λ ESLint κ·μΉλ€μ λΉνμ±νμμΌμ£Όλ config

     - eslint-plugin-prettier: prettierμμ μΈμνλ μ€λ₯λ₯Ό ESLintκ° μΆλ ₯ // μ¬μ©ν΄λ λμ§λ§ λΉμΆ

     - eslint-config-airbnb: airbnbμ¬μ μ½λ©κ·μΉμ μ¬μ©

     - npm eslint-plugin-react eslint-plugin-react-hooks eslint-config-prettier --save-dev

     - λ΄λΆ μ€μ 

       - env : **μ¬μ  μ μλ μ μ­ λ³μ μ¬μ©μ μ μ** / μμ£Ό μ¬μ©λλ μ€μ μΌλ‘λ browser, node

       - parserOptions : **ESLint μ¬μ©μ μν΄ μ§μνλ €λ Javascript μΈμ΄ μ΅μμ μ§μ **

       - plugins : **νλ¬κ·ΈμΈ μΆκ°** => μΆκ° ν  λ, eslint-plugin- λΆλΆ μλ΅ κ°λ₯

       - extends : **κ·μΉ μ€μ ** => νλ¬κ·ΈμΈμ μΆκ° ν νμ κ·μΉμ μ ν΄μ€μΌ μ¬μ© κ°λ₯ / reactλ₯Ό μν κ·μΉ recommendedλ μΆμ²μ΄ λλ κ±Έ μ¬μ©

       - rule : **κ·μΉ λ³κ²½**

     - [ESLint μ€μ  μ΄ν΄λ³΄κΈ°](https://velog.io/@kyusung/eslint-config-2)
     - [[React] ESLint Prettier μ€μ λ°©λ²](https://any-ting.tistory.com/94)

  4. React_Test(Jest)μΌλ

     - eslint-plugin-testing-library : renderλ‘ Dom κ·Έλ¦¬λ λΆλΆ

     - eslint-plugin-jest-dom : expect-matcherλ‘ νμ€νΈ

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

- βοΈ Prettier μ€μΉ λ° μ€μ 

  1. npmμΌλ‘ μ€μΉ : μ¬λ¬ κ°λ°μμ κ°μ ν¬λ§· μ μ§μ λ μ’μ

  ```javascript
  {
  "singleQuote": false, // λ¬Έμμ΄μ λ°μ΄νλ‘ formatting
  "semi": true, // μ½λ λ§μ§λ§μ μΈλ―Έμ½λ₯Έμ΄ μκ² formatting
  "useTabs": false, // ν­μ μ¬μ©μ κΈνκ³  μ€νμ΄μ€λ° μ¬μ©μΌλ‘ λμ²΄νκ² formatting
  "tabWidth": 2, // λ€μ¬μ°κΈ° λλΉλ 2μΉΈ
  "trailingComma": "all", // κ°μ²΄λ λ°°μ΄ ν€:κ° λ€μ ν­μ μ½€λ§λ₯Ό λΆνλλ‘ formatting
  "printWidth": 80, // μ½λ νμ€μ΄ maximum 80μΉΈ
  "arrowParens": "avoid", // νμ΄ν ν¨μκ° νλμ λ§€κ°λ³μλ₯Ό λ°μ λ κ΄νΈλ₯Ό μλ΅νκ² formatting
  "endOfLine": "auto" // EoF λ°©μ, OSλ³λ‘ μ²λ¦¬ λ°©μμ΄ λ€λ¦
  }
  ```

  2. VSCODE μ΅μ€νμμΌλ‘ μ€μΉ : νΌμμ νΈνκ² μ€μΉν΄μ μ¬μ©νκΈ° μ’μ

     - μ€μ  : Extension Settings μμ μ€μ  λ³κ²½

<br/>

---

<br/>

### π‘Β 3. TDD

- βοΈ TDD : Test Driven Development

  - μ€μ  μ½λλ₯Ό μμ±νκΈ° μ μ νμ€νΈ μ½λλ₯Ό λ¨Όμ  μμ±

  - νμ€νΈ μ½λλ₯Ό μμ±ν ν κ·Έ νμ€νΈ μ½λλ₯Ό Pass ν  μ μλ μ€μ  μ½λλ₯Ό μμ±

- βοΈ TDD μ₯μ 

  1. TDDλ₯Ό νλ―λ‘ μΈν΄ λ§μ κΈ°λ₯μ νμ€νΈνκΈ°μ μμ€ μ½λμ μμ κ°μ΄ λΆμ¬λλ€.

  2. μ€μ  κ°λ°νλ©΄μ λ§μ μκ°μ΄ μμλλ λΆλΆμ λλ²κΉ λΆλΆμ΄κΈ°μ TDDλ₯Ό μ¬μ©νλ©΄ λλ²κΉ μκ°μ΄ μ€μ΄λ€κ³  μ€μ  κ°λ°### μκ°λ μ€μ΄λ­λλ€.

  3. μμ€ μ½λ νλνλλ₯Ό λμ± μ μ€νκ² μ§€ μ μκΈ° λλ¬Έμ κΉ¨λν μ½λκ° λμ¬ νλ₯ μ΄ λμ΅λλ€.

<br/>

---

<br/>

### βοΈΒ 4. react-counter-test

    - FireEvent API : μ μ κ° λ°μμν€λ μ‘μ(μ΄λ²€νΈ)μ λν νμ€νΈλ₯Ό ν΄μΌνλ κ²½μ° μ¬μ©

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
  // App μ»΄ν¬λνΈλ₯Ό λ λλ§
  render(<App />);
  //screen objectλ₯Ό μ΄μ©ν΄μ μνλ μλ λ©νΈμ μ κ·Ό(μ κ·Όν  λ  IDλ‘)
  const counterElement = screen.getByTestId("counter");
  // idκ° counterμΈ μλ λ©νΈμ νμ€νΈκ° 0μΈμ§ νμ€νΈ
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  // App μ»΄ν¬λνΈλ₯Ό λ λλ§
  render(<App />);
  //screen objectλ₯Ό μ΄μ©ν΄μ μνλ μλ λ©νΈμ μ κ·Ό(μ κ·Όν  λ  IDλ‘)
  const minusButtonElement = screen.getByTestId("minus-button");
  // idκ° minus-buttonμΈ μλ λ©νΈμ νμ€νΈκ° -μΈμ§ νμ€νΈ
  expect(minusButtonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  // App μ»΄ν¬λνΈλ₯Ό λ λλ§
  render(<App />);
  //screen objectλ₯Ό μ΄μ©ν΄μ μνλ μλ λ©νΈμ μ κ·Ό(μ κ·Όν  λ  IDλ‘)
  const plusButtonElement = screen.getByTestId("plus-button");
  // idκ° plus-buttonμΈ μλ λ©νΈμ νμ€νΈκ° +μΈμ§ νμ€νΈ
  expect(plusButtonElement).toHaveTextContent("+");
});

test("When the + button is pressed, the counter changes to 1", () => {
  // App μ»΄ν¬λνΈλ₯Ό λ λλ§
  render(<App />);
  //screen objectλ₯Ό μ΄μ©ν΄μ μνλ μλ λ©νΈμ μ κ·Ό(μ κ·Όν  λ  IDλ‘)
  const buttonElement = screen.getByTestId("plus-button");
  // fireEventλ μ μ κ° λ°μμν€λ μ‘μ(μ΄λ²€νΈ)μ λν νμ€νΈλ₯Ό ν΄μΌνλ κ²½μ° μ¬μ©
  fireEvent.click(buttonElement);
  //screen objectλ₯Ό μ΄μ©ν΄μ μνλ μλ λ©νΈμ μ κ·Ό(μ κ·Όν  λ  IDλ‘)
  const counterElement = screen.getByTestId("counter");
  // idκ° counterμΈ μλ λ©νΈμ νμ€νΈκ° 1μΈμ§ νμ€νΈ
  expect(counterElement).toHaveTextContent(1);
});

test("When the - button is pressed, the counter changes to -1", () => {
  // App μ»΄ν¬λνΈλ₯Ό λ λλ§
  render(<App />);
  //screen objectλ₯Ό μ΄μ©ν΄μ μνλ μλ λ©νΈμ μ κ·Ό(μ κ·Όν  λ  IDλ‘)
  const buttonElement = screen.getByTestId("minus-button");
  // fireEventλ μ μ κ° λ°μμν€λ μ‘μ(μ΄λ²€νΈ)μ λν νμ€νΈλ₯Ό ν΄μΌνλ κ²½μ° μ¬μ©
  fireEvent.click(buttonElement);
  //screen objectλ₯Ό μ΄μ©ν΄μ μνλ μλ λ©νΈμ μ κ·Ό(μ κ·Όν  λ  IDλ‘)
  const counterElement = screen.getByTestId("counter");
  // idκ° counterμΈ μλ λ©νΈμ νμ€νΈκ° -1μΈμ§ νμ€νΈ
  expect(counterElement).toHaveTextContent(-1);
});

test("on/off button has blue color", () => {
  // App μ»΄ν¬λνΈλ₯Ό λ λλ§
  render(<App />);
  //screen objectλ₯Ό μ΄μ©ν΄μ μνλ μλ λ©νΈμ μ κ·Ό(μ κ·Όν  λ  IDλ‘)
  const buttonElement = screen.getByTestId("on/off-button");
  // on/off λ²νΌ colorλ₯Ό blue νμΈ
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("Prevent the -,+ button from being pressed when the on/off button is cliecked", () => {
  // App μ»΄ν¬λνΈλ₯Ό λ λλ§
  render(<App />);
  //screen objectλ₯Ό μ΄μ©ν΄μ μνλ μλ λ©νΈμ μ κ·Ό(μ κ·Όν  λ  IDλ‘)
  const onOffButtonElement = screen.getByTestId("on/off-button");
  // fireEventλ μ μ κ° λ°μμν€λ μ‘μ(μ΄λ²€νΈ)μ λν νμ€νΈλ₯Ό ν΄μΌνλ κ²½μ° μ¬μ©
  fireEvent.click(onOffButtonElement);
  //screen objectλ₯Ό μ΄μ©ν΄μ μνλ μλ λ©νΈμ μ κ·Ό(μ κ·Όν  λ  IDλ‘)
  const plusButtonElement = screen.getByTestId("plus-button");
  // on/off-button ν΄λ¦­ν  λ, -, + λ²νΌμ λͺ»λλ₯΄κ² λ§κΈ°
  expect(plusButtonElement).toBeDisabled();
});
```

<br/>

---

<br/>
