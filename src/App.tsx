import { css } from "@emotion/css";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <div
      className={css({
        height: "100%",
        width: "100%",
      })}
    >
      <HomePage />
    </div>
  );
}

export default App;
