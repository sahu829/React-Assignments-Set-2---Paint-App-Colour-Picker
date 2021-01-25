import React from "react";
import "../styles/Child.css";

const Selection = ({ applyColor }) => {
  const [color, setColor] = React.useState({ background: "" });

  /*const handleClick = () => {
    applyColor(setColor);
  };*/

  return (
    <>
      <div
        className="fix-box"
        style={color}
        onClick={() => applyColor(setColor)}
      >
        <h2 className="subheading">Selection</h2>
      </div>
    </>
  );
};

export default Selection;
