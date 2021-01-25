import React from "react";

const Selection = ({ applyColor }) => {
  const [color, setColor] = React.useState({ background: "" });

  return (
    <>
      <div className="fix-box" style={color}>
        <h2 className="subheading">Selection</h2>
      </div>
    </>
  );
};

export default Selection;
