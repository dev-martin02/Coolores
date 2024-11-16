import colorGuide from "../../colorsMeaning.json";
import "./ColorMeaning.css";

export function ColorMeaning() {
  return (
    <div className="color-guide">
      <h1>Color Psychology & Usage Guide</h1>
      {colorGuide.colorGroups.map((group) => (
        <div key={group.group} className="color-group">
          <h2 style={{ color: group.mainColorHex }}>{group.group}</h2>
          <p>
            <strong>Psychology:</strong> {group.psychology}
          </p>
          <p>
            <strong>Common Uses:</strong> {group.commonUses.join(", ")}
          </p>
          <div className="examples-grid">
            {group.examples.map((example) => (
              <div key={example.hex} className="color-example">
                <div
                  className="color-swatch"
                  style={{ backgroundColor: example.hex }}
                ></div>
                <p className="color-name">{example.name}</p>
                <p className="color-hex">{example.hex}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
