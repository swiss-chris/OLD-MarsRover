import React from "react";

const Plateau = props => {
  return (
    <div>
      <h2>Plateau Size</h2>
      <input
        value={props.size}
        onChange={props.handleChange}
        placeholder="999 999"
        pattern="\d{1,3} \d{1,3}"
        maxLength="7"
      />
    </div>
  );
};

export default Plateau;
