import { useState } from "react";
import "./userColor.css";

export default function UserColor() {
  const [color, setColor] = useState("#8080ff");

  return (
    <div className="primaryColorContainer">
      <h2>Primary Color</h2>
      <label
        htmlFor="mainColor"
        className="colorPickerLabel"
        style={{ backgroundColor: color }}
      ></label>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        id="mainColor"
      />
    </div>
  );
}
