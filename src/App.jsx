import React from "react";
import Greetings from "./components/Greetings";
import ButtonCounter from "./components/ButtonCounter";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 space-y-6">
      <Greetings name="Ryan Arkhan" npm="51422487" />
      <ButtonCounter />
    </div>
  );
}

export default App;
