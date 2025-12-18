import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import SpaceScene from "./components/SpaceScene";
import Website from "./components/Website";
import Navbar from "./components/Navbar";
import PlaceholderPage from "./components/PlaceholderPage";

export default function App() {
  return (
    <Router>
      {/* FIXED 3D BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <SpaceScene />
        </Canvas>
      </div>

      {/* FIXED NAVBAR */}
      <Navbar />

      {/* CONTENT ROUTES */}
      <Routes>
        <Route path="/" element={<Website />} />

        {/* Project Routes */}
        <Route path="/projects/past" element={<PlaceholderPage title="Past Projects" />} />
        <Route path="/projects/ongoing" element={<PlaceholderPage title="Ongoing Projects" />} />
        <Route path="/projects/upcoming" element={<PlaceholderPage title="Upcoming Projects" />} />

        {/* Event Routes */}
        <Route path="/events/upcoming" element={<PlaceholderPage title="Upcoming Events" />} />
        <Route path="/events/ongoing" element={<PlaceholderPage title="Ongoing Events" />} />
        <Route path="/events/past" element={<PlaceholderPage title="Past Events" />} />

        {/* Other Routes */}
        <Route path="/gallery" element={<PlaceholderPage title="Gallery" />} />
        <Route path="/about" element={<PlaceholderPage title="About Us" />} />
        <Route path="/team" element={<PlaceholderPage title="Team" />} />
        <Route path="/calendar" element={<PlaceholderPage title="Astronomy Calendar" />} />
        <Route path="/competitions" element={<PlaceholderPage title="Competitions" />} />
      </Routes>
    </Router>
  );
}
