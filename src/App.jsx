import Dog from "./components/Dog";
import { Canvas } from "@react-three/fiber";
import Sections from "./components/Sections";

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <main
        style={{
          backgroundImage: "url(/background-l.png)",
          backgroundRepeat: "no-repeat",
        }}
        className="fixed inset-0 z-0"
      >
        <Canvas>
          <Dog />
        </Canvas>
      </main>
      <Sections />
    </div>
  );
};

export default App;
