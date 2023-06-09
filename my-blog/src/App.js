import { useState } from "react";

function App() {
  console.log('render');
  const [number, setNumber] = useState(1); // [변수, 함수]

  const double = () => {
    // const doubledNumber = number * 2;
    setNumber((prevState) => prevState * 2);
    setNumber((prevState) => prevState * 2);
  };

  return (
    <>
      <div>{number}</div>
      <button className="btn btn-primary" onClick={double}>
        Submit
      </button>
    </>
  );
}

export default App;