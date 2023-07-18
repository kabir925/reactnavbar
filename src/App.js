import React from "react";
import Navbar from "./components/Navbar";
import Selftest from "./components/Selfttest";
import CodeTwo from "./components/CodeTwo";
import CodeThree from "./components/CodeThree";
const App = () => {
  // const options = ["1", "2", "2", "2", "2"];
  // const onChangeHandler = (e) => {
  //   console.log("User selected", e.target.value);
  // };

  return (
    <>
      <CodeThree />
      {/* <select onChange={onChangeHandler}>
        <option>Please choose any one option</option>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select> */}
    </>
  );
};

export default App;
