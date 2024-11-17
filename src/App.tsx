import { PaletteCombination } from "./components/chooseColor/colorCombination/PaletteCombination";
import UserColor from "./components/chooseColor/userColor/userColor";
import { ColorMeaning } from "./components/colorMeaning/ColorMeaning";
import colorGuide from "./colorsMeaning.json";
import { useMainStore } from "./store/mainStore";

function App() {
  const { currentColorGuide, setColorGuide } = useMainStore();

  function getGroupIndex(groupName: string) {
    const indexColor = colorGuide.colorGroups.findIndex(
      (data) => groupName === data.group
    );
    if (indexColor < 0) return console.log("color not found ");
    setColorGuide(indexColor);
  }

  return (
    <main>
      <section className="sectionColor">
        <UserColor />
        <PaletteCombination />
      </section>

      <section>
        <ColorMeaning />
        <div className="colorSelection">
          {colorGuide.colorGroups.map(({ mainColorHex, group }) => (
            <div
              onClick={() => getGroupIndex(group)}
              className="color-swatch"
              data-color={mainColorHex}
              style={{ backgroundColor: mainColorHex }}
            ></div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
