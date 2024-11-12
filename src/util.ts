// Define an interface for HSL color format
interface HSLColor {
  h: number;
  s: number;
  l: number;
}

// Convert HEX to HSL
export function hexToHSL(H: string): HSLColor {
  let red = 0,
    green = 0,
    blue = 0;
  if (H.length === 7) {
    red = parseInt(H.slice(1, 3), 16) / 255;
    green = parseInt(H.slice(3, 5), 16) / 255;
    blue = parseInt(H.slice(5, 7), 16) / 255;
  }

  // get the max and the min number
  const max = Math.max(red, green, blue),
    min = Math.min(red, green, blue);

  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case red:
        h = (green - blue) / d + (green < blue ? 6 : 0);
        break;
      case green:
        h = (blue - red) / d + 2;
        break;
      case blue:
        h = (red - green) / d + 4;
        break;
    }
    h = Math.round(h * 60);
  }
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  return { h, s, l };
}

// Convert HSL to HEX
export function HSLToHex({ h, s, l }: HSLColor): string {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    Math.round(
      255 * (l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1))))
    );
  return `#${f(0).toString(16).padStart(2, "0")}${f(8)
    .toString(16)
    .padStart(2, "0")}${f(4).toString(16).padStart(2, "0")}`;
}
