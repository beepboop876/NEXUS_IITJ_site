import { Canvas } from "@react-three/fiber";
import SpaceScene from "./components/SpaceScene";
import Website from "./components/Website";

export default function App() {
  return (
    <>
      {/* FIXED 3D BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <SpaceScene />
        </Canvas>
      </div>

      {/* FOREGROUND WEBSITE */}
      <Website />
    </>
  );
}
