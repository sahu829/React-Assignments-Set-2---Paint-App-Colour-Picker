import React from "react";

const Selection = ({ applyColor }) => {
  const [color, setColor] = React.useState({ background: "" });

  const handleClick = () => {
    applyColor(setColor);
  };

  return (
    <>
      <div className="fix-box" style={color} onClick={handleClick}>
        <h2 className="subheading">Selection</h2>
      </div>
    </>
  );
};

export default Selection;
