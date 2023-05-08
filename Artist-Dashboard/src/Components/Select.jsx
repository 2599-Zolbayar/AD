import React, { useState } from "react";

function Select(props) {
  const title = props.title;
  const options = props.options;
  const [selectedValue, setSelectedValue] = useState("{options[0]}");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="select">
      <h2>{title}</h2>
      <select
        className="my-select"
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value={options[0]}>{options[0]}</option>
        <option value={options[1]}>{options[1]}</option>
        <option value={options[2]}>{options[2]}</option>
        <option value={options[3]}>{options[3]}</option>
      </select>
    </div>
  );
}

export default Select;
