import "./App.css";
import { motion, useAnimate } from "framer-motion"

function App() {

  const animate = useAnimate();

  return (
    <main onKeyDown={(e) => console.log(e)}>
      <h1 className="gameName">Endless Run</h1>
      <div className="content">
        <div className="user" />
        <div className="road">
          <div className="trap"></div>
        </div>
      </div>
    </main>
  )
}

export default App
