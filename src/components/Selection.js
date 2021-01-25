import React from "react";

const Selection = ({ applyColor }) => {
  const [color, setColor] = React.useState({ background: "" });

  const handleClick = () => {
    /*setColor({ background: "blue" });*/

    /*setColor(()=>applyColor(nextBackground));*/
    //console.log(applyColor.background);
    //console.log(applyColor());

    setColor({ background: applyColor().background });
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
