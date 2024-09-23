// src/components/UserInput.js
import React from "react";

function UserInput({ data, onUserInput }) {
  const handleChange = (e, index) => {
    const newData = { ...data };
    newData.entries[index].value = parseFloat(e.target.value);
    onUserInput(newData);
  };

  return (
    <div>
      <h3>Patrimoine</h3>
      {data.entries.map((entry, index) => (
        <div key={entry.id}>
          <label>{entry.label}: </label>
          <input
            type="number"
            value={entry.value}
            onChange={(e) => handleChange(e, index)}
          />
        </div>
      ))}
    </div>
  );
}

export default UserInput;
