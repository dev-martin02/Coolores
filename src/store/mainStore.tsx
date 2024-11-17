import { create } from "zustand";

type mainStore = {
  userColor: string;
  updateColor: (color: string) => void;

  currentColorGuide: number;
  setColorGuide: (number: number) => void;
};

export const useMainStore = create<mainStore>((set) => ({
  userColor: "#8080ff",
  updateColor: (color) => set(() => ({ userColor: color })),
  currentColorGuide: 0,
  setColorGuide: (index) => set(() => ({ currentColorGuide: index })),
}));
