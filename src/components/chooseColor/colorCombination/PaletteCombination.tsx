import { useState } from "react";
import {
  generateAnalogousPalette,
  generateComplementaryPalette,
  generateMonoPalette,
  generateSplitComplementaryPalette,
  generateTriadicPalette,
} from "../../../functions/colorCombinations";
import "./palette.css";

export function PaletteCombination() {
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const [activePalette, setActivePalette] = useState<string | null>(null);

  function clipboardCopy(colorValue: string) {
    navigator.clipboard.writeText(colorValue);
    alert("Color was copied!!");
  }

  const togglePalette = (paletteName: string) => {
    if (activePalette === paletteName) {
      setActivePalette(null); // Hide if clicking the active palette
    } else {
      setActivePalette(paletteName); // Show the clicked palette
    }
  };

  const color = "#fff";

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

  return (
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
                  onMouseEnter={() => setIsHovering(index)}
                  onMouseLeave={() => setIsHovering(null)}
                  onClick={() => clipboardCopy(colorValue)}
                >
                  {isHovering === index && (
                    <span className="hexName">{colorValue}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
