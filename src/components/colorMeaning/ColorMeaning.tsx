import { colorGroups } from "../../colorsMeaning.json";
import { useMainStore } from "../../store/mainStore";
import "./colorMeaning.css";

export function ColorMeaning() {
  const { currentColorGuide } = useMainStore();

  const group = colorGroups[currentColorGuide];
  return (
    <div className="color-guide">
      <h2>Color Psychology & Usage Guide</h2>
      <div className="colorGroup">
        <article key={group.group} className="colorMain">
          <div
            className="colorSample"
            style={{ background: group.mainColorHex }}
          ></div>
          <main className="colorInfo">
            <h2 style={{ color: group.mainColorHex }}>{group.group}</h2>
            <section>
              <h3 className="articleHeading">Psychology</h3>
              <p>{group.psychology}</p>
            </section>
            <section>
              <h3 className="articleHeading">Common Uses</h3>
              <p>{group.commonUses.join(", ")}</p>
            </section>

            <section>
              <h3 className="articleHeading">Variations</h3>
              <div className="groupSample">
                {group.examples.map((example) => (
                  <div key={example.hex}>
                    <div
                      style={{ backgroundColor: example.hex }}
                      className="sampleColor"
                    ></div>
                    <p>{example.name}</p>
                    <p>{example.hex}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </article>
      </div>
    </div>
  );
}
