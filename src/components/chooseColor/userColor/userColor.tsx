import "./userColor.css";
import { useMainStore } from "../../../store/mainStore";

export default function UserColor() {
  const { userColor, updateColor } = useMainStore();

  return (
    <div className="primaryColorContainer">
      <h2>Primary Color</h2>
      <label
        htmlFor="mainColor"
        className="colorPickerLabel"
        style={{ backgroundColor: userColor }}
      ></label>

      <input
        type="color"
        value={userColor}
        onChange={(e) => updateColor(e.target.value)}
        id="mainColor"
      />
    </div>
  );
}
