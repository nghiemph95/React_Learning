/** Khai báo Props
 * - Trong React: Props có thể dùng mà không cần định nghĩa
 */

// Create component Props
import React from "react";

function ColorBox(props) {
  const { color } = props; // Array destructuring

  return <div className="box" style={{ backgroundColor: color }}></div>;
}

// declare all props used in this component
ColorBox.prototype = {
  color: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
};

// set default value for non-required props
ColorBox.defaultProps = {
  rounded: true,
};

// Create component Cha
import React from "react";
import ColorBox from "./components/ColorBox";

export default function App() {
  return (
    <section>
      <ColorBox color="red"></ColorBox>
      <ColorBox color="green"></ColorBox>
      <ColorBox color="blue"></ColorBox>
    </section>
  );
}
