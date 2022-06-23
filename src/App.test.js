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
