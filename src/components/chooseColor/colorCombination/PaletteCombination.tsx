import { useState } from "react";
import {
  generateAnalogousPalette,
  generateComplementaryPalette,
  generateMonoPalette,
  generateSplitComplementaryPalette,
  generateTriadicPalette,
} from "../../../functions/colorCombinations";
import "./palette.css";
import { useMainStore } from "../../../store/mainStore";

export function PaletteCombination() {
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const [activePalette, setActivePalette] = useState<string | null>(null);

  const { userColor } = useMainStore();

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

  // Palette
  const combinationsArr = [
    {
      name: "Monochromatic Palette",
      generator: () => generateMonoPalette(userColor, 4),
    },
    {
      name: "Analogous Palette",
      generator: () => generateAnalogousPalette(userColor, 5),
    },
    {
      name: "Complementary Palette",
      generator: () => generateComplementaryPalette(userColor),
    },
    {
      name: "Triadic Palette",
      generator: () => generateTriadicPalette(userColor),
    },
    {
      name: "Split Complementary Palette",
      generator: () => generateSplitComplementaryPalette(userColor),
    },
  ];

  return (
    <div className="colorCombinationSection">
      <h3 id="combinationHeading">Color Combinations</h3>
      {combinationsArr.map((palette) => (
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
