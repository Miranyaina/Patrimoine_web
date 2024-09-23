// src/App.js
import React, { useState } from "react";
import Graph from "./components/Graph";
import UserInput from "./components/UserInput";
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [data, setData] = useState({
    dates: ["2024-07-01", "2024-07-16"],
    entries: [
      { id: 1, label: "Crésus & Cie", value: 100000 },
      { id: 2, label: "Blaise", value: -80000 }
    ]
  });

  const [selectedDate, setSelectedDate] = useState(null);

  const handleUserInput = (newData) => {
    setData(newData);
  };

  return (
    <div className="App">
      <div className="Article1">De</div>

      <div className="date-picker-container-1">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Sélectionnez une date"
        />
      </div>

      <div className="Article2">À</div>

      <div className="date-picker-container-2">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Sélectionnez une date"
        />
      </div>

      <div className="Flux1">
        <h2>FLUX IMPOSSIBLES</h2>
        <h3>Lorem ipsum ...</h3>
      </div>

      <div className="Flux2">
        <h2>FLUX JOURNALIERS</h2>
        <h3>Lorem ipsum ...</h3>
      </div>

      <div className="user-input">
        <UserInput data={data} onUserInput={handleUserInput} />
      </div>
      <div className="graph-output">
        <Graph data={data} />
      </div>
    </div>
  );
}

export default App;
