import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import "./KisanHero3D.css";

function FarmScene() {
  return (
    <>
      <Environment preset="sunset" />

      <Float speed={2} rotationIntensity={0.25} floatIntensity={0.5}>
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[5, 0.25, 3.5]} />
          <meshStandardMaterial color="#4d8b3a" />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.7}>
        <mesh position={[-1.5, 0, 0]}>
          <coneGeometry args={[0.55, 1.6, 32]} />
          <meshStandardMaterial color="#76b947" />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
        <mesh position={[1.2, 0.2, 0]}>
          <coneGeometry args={[0.7, 1.9, 32]} />
          <meshStandardMaterial color="#a4d65e" />
        </mesh>
      </Float>

      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[1.4, 0.7, 0.9]} />
        <meshStandardMaterial color="#d99a35" />
      </mesh>

      <mesh position={[0, 0.75, 0]}>
        <boxGeometry args={[0.9, 0.55, 0.7]} />
        <meshStandardMaterial color="#e6b44a" />
      </mesh>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.2}
      />
    </>
  );
}

export default function KisanHero3D() {
  return (
    <section className="kisan-hero">
      <div className="hero-copy">
        <motion.div
          className="hero-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🌱 FARM TO HOME • DIRECTLY
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Khet Se
          <span> Seedha</span>
          <br />
          Aap Tak.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Fresh crops directly from farmers to consumers.
          Better prices, fewer middlemen and smarter delivery.
        </motion.p>

        <div className="hero-buttons">
          <a href="/products" className="hero-primary">
            Shop Fresh Crops →
          </a>

          <a href="/add-crop" className="hero-secondary">
            🚜 Sell Your Crop
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>1K+</strong>
            <span>Farmers</span>
          </div>

          <div>
            <strong>5K+</strong>
            <span>Products</span>
          </div>

          <div>
            <strong>10K+</strong>
            <span>Orders</span>
          </div>
        </div>
      </div>

      <div className="hero-3d">
        <div className="ai-floating-card">
          <span>✨ AI MARKET INSIGHT</span>
          <strong>Tomato ₹28–₹31/kg</strong>
          <small>Demand ↑ 18%</small>
        </div>

        <Canvas camera={{ position: [0, 1.5, 7], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[4, 5, 4]} intensity={3} />
          <FarmScene />
        </Canvas>
      </div>
    </section>
  );
}