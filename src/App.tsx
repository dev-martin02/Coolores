import UserColor from "./components/chooseColor/userColor/userColor";
import { ColorMeaning } from "./components/colorMeaning/ColorMeaning";
import colorGuide from "./colorsMeaning.json";
import { useMainStore } from "./store/mainStore";

function App() {
  const { setColorGuide } = useMainStore();

  function getGroupIndex(groupName: string) {
    const indexColor = colorGuide.colorGroups.findIndex(
      (data) => groupName === data.group
    );
    if (indexColor < 0) return console.log("color not found ");
    setColorGuide(indexColor);
  }

  return (
    <main id="mainContent">
      <section className="sectionColor">
        <UserColor />
      </section>

      <section id="meaningSection">
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
