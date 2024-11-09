import { hexToHSL, HSLToHex } from "../util";

export function generateMonoPalette(hex: string, steps: number = 5): string[] {
  const hsl = hexToHSL(hex);
  const palette: string[] = [];

  // Adjust lightness to create monochromatic shades
  const stepSize = Math.floor(100 / (steps + 1)); // step size for lightness

  for (let i = 1; i <= steps; i++) {
    const newLightness = Math.max(
      0,
      Math.min(100, hsl.l + stepSize * (i - Math.floor(steps / 2)))
    );
    palette.push(HSLToHex({ h: hsl.h, s: hsl.s, l: newLightness }));
  }

  return palette;
}

// Generate Analogous Palette
export function generateAnalogousPalette(
  hex: string,
  steps: number = 5
): string[] {
  const hsl = hexToHSL(hex);
  const palette: string[] = [];

  for (let i = -Math.floor(steps / 2); i <= Math.floor(steps / 2); i++) {
    const newHue = (hsl.h + i * 30) % 360; // Adjusting hue by ±30 degrees for analogous colors
    palette.push(
      HSLToHex({ h: newHue < 0 ? newHue + 360 : newHue, s: hsl.s, l: hsl.l })
    );
  }

  return palette;
}

// Generate Complementary Palette
export function generateComplementaryPalette(hex: string): string[] {
  const hsl = hexToHSL(hex);
  const complementaryHue = (hsl.h + 180) % 360; // Opposite hue on the color wheel
  return [HSLToHex(hsl), HSLToHex({ h: complementaryHue, s: hsl.s, l: hsl.l })];
}

// Generate Triadic Palette
export function generateTriadicPalette(hex: string): string[] {
  const hsl = hexToHSL(hex);
  return [
    HSLToHex(hsl),
    HSLToHex({ h: (hsl.h + 120) % 360, s: hsl.s, l: hsl.l }),
    HSLToHex({ h: (hsl.h + 240) % 360, s: hsl.s, l: hsl.l }),
  ];
}

// Generate Split Complementary Palette
export function generateSplitComplementaryPalette(hex: string): string[] {
  const hsl = hexToHSL(hex);
  return [
    HSLToHex(hsl),
    HSLToHex({ h: (hsl.h + 150) % 360, s: hsl.s, l: hsl.l }),
    HSLToHex({ h: (hsl.h + 210) % 360, s: hsl.s, l: hsl.l }),
  ];
}
