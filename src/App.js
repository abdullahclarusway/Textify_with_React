import { useRef, useEffect, useState } from "react";
import "./App.css";
import MainContext from "./MainContext";
import LeaveCommentText from "./components/LeaveCommentText";

function App() {
  const screen = useRef(null);
  const [mode, setMode] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    screen.current.focus();
  }, []);

  const handleKeyUp = (e) => {
    if (e.key === "c") {
      setMode(!mode);
    }
  };

  const handleMouseMove = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY,
    });
  };

  const data = {
    position,
  };

  return (
    <MainContext.Provider value={data}>
      <div
        className={`screen${mode && "editable"}`}
        ref={screen}
        onKeyUp={handleKeyUp}
        onMouseMove={handleMouseMove}
        tabIndex={0}
      >
        <img src="https://webso.cool/images/radyosfer.jpg" />
        {mode && <LeaveCommentText />}
        {mode && <div>Yorum modu aktif</div>}
      </div>
    </MainContext.Provider>
  );
}

export default App;
