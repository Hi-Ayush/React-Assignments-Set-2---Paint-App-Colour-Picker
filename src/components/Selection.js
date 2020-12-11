import React from "react";
import "../styles/Child.css";
function Selection(props) {
  const [styleColor, updateSelectionStyle] = React.useState({ background: "" });
  return (
    <>
      <div
        className="fix-box"
        style={styleColor}
        onClick={() => {
          props.applyColor(updateSelectionStyle);
        }}
      >
        <h2 className="subheading">Selection</h2>
      </div>
    </>
  );
}
export default Selection;
