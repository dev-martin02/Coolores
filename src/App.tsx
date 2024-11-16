import { PaletteCombination } from "./components/chooseColor/colorCombination/PaletteCombination";
import UserColor from "./components/chooseColor/userColor/userColor";
import { ColorMeaning } from "./components/colorMeaning/ColorMeaning";

function App() {
  return (
    <main>
      <section className="sectionColor">
        <UserColor />
        <PaletteCombination />
      </section>

      <ColorMeaning />
    </main>
  );
}

export default App;
