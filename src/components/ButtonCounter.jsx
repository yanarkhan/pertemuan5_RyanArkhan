import { useState } from "react";

const ButtonCounter = () => {
  const [count, setCount] = useState(0);

  const incrementValue = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementValue = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-yellow-200 rounded-lg">
      <h3 className="text-xl font-bold">Klik disini!</h3>
      <div className="flex items-center space-x-4">
        <button
          onClick={decrementValue}
          className={`px-4 py-2 rounded transition ${
            count === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
          disabled={count === 0}
        >
          -
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          onClick={incrementValue}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ButtonCounter;
