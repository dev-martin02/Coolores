import { create } from "zustand";
import UserColor from "../components/chooseColor/userColor/userColor";

type mainStore = {
  userColor: string;
  updateColor: (color: string) => void;
};

export const useMainStore = create<mainStore>((set) => ({
  userColor: "#8080ff",
  updateColor: (color) => set(() => ({ userColor: color })),
}));
