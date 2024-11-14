import { useState } from "react";
import {
  generateAnalogousPalette,
  generateComplementaryPalette,
  generateMonoPalette,
  generateSplitComplementaryPalette,
  generateTriadicPalette,
} from "./functions/colorCombinations";

function App() {
  const [color, setColor] = useState("#8080ff");
  const [activePalette, setActivePalette] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState<number | null>(null);

  function ClipboardCopy(colorValue: string) {
    navigator.clipboard.writeText(colorValue);
    alert("Color was copied!!");
  }

  // Array of palette configurations
  const palettes = [
    {
      name: "Monochromatic Palette",
      generator: () => generateMonoPalette(color, 4),
    },
    {
      name: "Analogous Palette",
      generator: () => generateAnalogousPalette(color, 5),
    },
    {
      name: "Complementary Palette",
      generator: () => generateComplementaryPalette(color),
    },
    {
      name: "Triadic Palette",
      generator: () => generateTriadicPalette(color),
    },
    {
      name: "Split Complementary Palette",
      generator: () => generateSplitComplementaryPalette(color),
    },
  ];

  const togglePalette = (paletteName: string) => {
    if (activePalette === paletteName) {
      setActivePalette(null); // Hide if clicking the active palette
    } else {
      setActivePalette(paletteName); // Show the clicked palette
    }
  };

  return (
    <div className="sectionColor">
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
      <div className="colorCombinationSection">
        <h2>Color Combinations</h2>
        {palettes.map((palette) => (
          <div key={palette.name}>
            <h3
              onClick={() => togglePalette(palette.name)}
              className="palette-header"
            >
              {palette.name}
              <span className="toggle-indicator">
                {activePalette === palette.name ? "▼" : "▶"}
              </span>
            </h3>
            {activePalette === palette.name && (
              <div className="colorPalette">
                {palette.generator().map((colorValue, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor: colorValue }}
                    // onClick={() => toggleHexname()}
                    onMouseEnter={() => setIsHovering(index)}
                    onMouseLeave={() => setIsHovering(null)}
                    onClick={() => ClipboardCopy(colorValue)}
                  >
                    {isHovering === index && colorValue}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
