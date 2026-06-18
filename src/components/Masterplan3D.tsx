import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Html,
  OrbitControls,
  Environment,
  ContactShadows,
  Cloud,
  Clouds,
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

/* ---------- Procedural Textures (no asset files needed) ---------- */

function makeGrassTexture() {
  const size = 512;
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d")!;
  // base
  const g = ctx.createLinearGradient(0, 0, size, size);
  g.addColorStop(0, "#dfeadb");
  g.addColorStop(1, "#cadcc4");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  // grass speckle
  for (let i = 0; i < 4000; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const a = 0.05 + Math.random() * 0.18;
    ctx.fillStyle = `rgba(${90 + Math.random() * 60},${130 + Math.random() * 50},${80 + Math.random() * 40},${a})`;
    ctx.fillRect(x, y, 1.5, 1.5);
  }
  // soft patches
  for (let i = 0; i < 18; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const r = 30 + Math.random() * 80;
    const rg = ctx.createRadialGradient(x, y, 0, x, y, r);
    rg.addColorStop(0, "rgba(168,196,142,0.25)");
    rg.addColorStop(1, "rgba(168,196,142,0)");
    ctx.fillStyle = rg;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(4, 4);
  tex.anisotropy = 8;
  return tex;
}

function makeAsphaltTexture() {
  const size = 256;
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#9ea7b3";
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 3000; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const v = 140 + Math.random() * 60;
    ctx.fillStyle = `rgba(${v},${v + 5},${v + 10},${Math.random() * 0.5})`;
    ctx.fillRect(x, y, 1, 1);
  }
  // dashed center line
  ctx.fillStyle = "#f8fafc";
  for (let y = 8; y < size; y += 28) ctx.fillRect(size / 2 - 1, y, 2, 14);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function makeWindowsTexture() {
  const w = 256, h = 256;
  const c = document.createElement("canvas");
  c.width = w; c.height = h;
  const ctx = c.getContext("2d")!;
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, "#f6f8fc");
  g.addColorStop(1, "#dbe6f3");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  // window grid
  const cols = 8, rows = 10;
  const pw = w / cols, ph = h / rows;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const lit = Math.random() > 0.55;
      ctx.fillStyle = lit ? "#bcd3ee" : "#3a4a64";
      ctx.fillRect(i * pw + pw * 0.18, j * ph + ph * 0.22, pw * 0.64, ph * 0.5);
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 8;
  return tex;
}

/* ---------- Scene Pieces ---------- */

function Terrain({ map }: { map: THREE.Texture }) {
  const geo = useMemo(() => {
    const g = new THREE.PlaneGeometry(26, 26, 120, 120);
    const pos = g.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z =
        Math.sin(x * 0.35) * 0.28 +
        Math.cos(y * 0.4) * 0.24 +
        Math.sin((x + y) * 0.18) * 0.18;
      pos.setZ(i, z);
    }
    g.computeVertexNormals();
    return g;
  }, []);

  return (
    <mesh geometry={geo} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <meshStandardMaterial map={map} roughness={0.95} metalness={0} />
    </mesh>
  );
}

function Water() {
  const ref = useRef<THREE.MeshPhysicalMaterial>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.iridescence = 0.6 + Math.sin(clock.elapsedTime) * 0.1;
    }
  });
  return (
    <mesh position={[-3.2, 0.08, 2.4]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <circleGeometry args={[1.6, 48]} />
      <meshPhysicalMaterial
        ref={ref}
        color="#8fb8d6"
        roughness={0.05}
        metalness={0.2}
        clearcoat={1}
        clearcoatRoughness={0.05}
        transmission={0.4}
        thickness={0.6}
        iridescence={0.6}
      />
    </mesh>
  );
}

function Roads({ map }: { map: THREE.Texture }) {
  const ringGeo = useMemo(() => new THREE.RingGeometry(3.6, 3.95, 96), []);
  const ringGeo2 = useMemo(() => new THREE.RingGeometry(6.6, 6.95, 96), []);
  const m1 = useMemo(() => map.clone(), [map]);
  const m2 = useMemo(() => map.clone(), [map]);
  m1.needsUpdate = true; m2.needsUpdate = true;
  m1.repeat.set(20, 1); m2.repeat.set(36, 1);
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.04, 0]}>
      <mesh geometry={ringGeo} receiveShadow>
        <meshStandardMaterial map={m1} roughness={0.85} />
      </mesh>
      <mesh geometry={ringGeo2} receiveShadow>
        <meshStandardMaterial map={m2} roughness={0.85} />
      </mesh>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const a = (i / 6) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(a) * 5.2, Math.sin(a) * 5.2, 0]}
            rotation={[0, 0, a + Math.PI / 2]}
            receiveShadow
          >
            <planeGeometry args={[0.32, 3.1]} />
            <meshStandardMaterial color="#a8b1bd" roughness={0.9} />
          </mesh>
        );
      })}
    </group>
  );
}

function Buildings({ windowsMap }: { windowsMap: THREE.Texture }) {
  const blocks = useMemo(() => {
    const arr: {
      pos: [number, number, number];
      size: [number, number, number];
      color: string;
      roofColor: string;
      windows: boolean;
    }[] = [];
    const palette = ["#ffffff", "#f4f6f8", "#eef2f8", "#e0e8f2", "#f7eedb"];
    const roofs = ["#c9a17a", "#b88a6b", "#8aa0b8", "#d6c19a"];
    const rng = (s: number) => {
      const x = Math.sin(s) * 10000;
      return x - Math.floor(x);
    };
    let s = 1;
    for (let i = 0; i < 34; i++) {
      const a = rng(s++) * Math.PI * 2;
      const r = 2 + rng(s++) * 7;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const w = 0.55 + rng(s++) * 0.9;
      const d = 0.55 + rng(s++) * 0.9;
      const h = 0.5 + rng(s++) * 2.2;
      arr.push({
        pos: [x, h / 2, z],
        size: [w, h, d],
        color: palette[Math.floor(rng(s++) * palette.length)],
        roofColor: roofs[Math.floor(rng(s++) * roofs.length)],
        windows: h > 1.1,
      });
    }
    return arr;
  }, []);

  const windowMaps = useMemo(
    () =>
      blocks.map((b) => {
        const t = windowsMap.clone();
        t.needsUpdate = true;
        t.repeat.set(
          Math.max(1, Math.round(b.size[0] * 2)),
          Math.max(1, Math.round(b.size[1] * 1.6)),
        );
        return t;
      }),
    [blocks, windowsMap],
  );

  return (
    <group>
      {blocks.map((b, i) => (
        <Float key={i} speed={0.5} rotationIntensity={0} floatIntensity={0.08}>
          <group position={b.pos}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={b.size} />
              {b.windows ? (
                <meshPhysicalMaterial
                  map={windowMaps[i]}
                  color={b.color}
                  roughness={0.35}
                  metalness={0.25}
                  clearcoat={0.6}
                  clearcoatRoughness={0.2}
                />
              ) : (
                <meshPhysicalMaterial
                  color={b.color}
                  roughness={0.5}
                  metalness={0.05}
                  clearcoat={0.3}
                />
              )}
            </mesh>
            <mesh position={[0, b.size[1] / 2 + 0.03, 0]} castShadow>
              <boxGeometry args={[b.size[0] * 1.02, 0.06, b.size[2] * 1.02]} />
              <meshStandardMaterial color={b.roofColor} roughness={0.75} />
            </mesh>
          </group>
        </Float>
      ))}
    </group>
  );
}

function Trees() {
  const trees = useMemo(() => {
    const arr: [number, number, number][] = [];
    const rng = (s: number) => {
      const x = Math.sin(s * 12.9898) * 43758.5453;
      return x - Math.floor(x);
    };
    for (let i = 0; i < 60; i++) {
      const a = rng(i + 1) * Math.PI * 2;
      const r = 1.5 + rng(i + 99) * 8.5;
      arr.push([Math.cos(a) * r, 0, Math.sin(a) * r]);
    }
    return arr;
  }, []);
  return (
    <group>
      {trees.map((p, i) => (
        <group key={i} position={p}>
          <mesh position={[0, 0.18, 0]} castShadow>
            <cylinderGeometry args={[0.04, 0.05, 0.36, 6]} />
            <meshStandardMaterial color="#6b4a2b" roughness={1} />
          </mesh>
          <mesh position={[0, 0.5, 0]} castShadow>
            <sphereGeometry args={[0.28, 12, 12]} />
            <meshStandardMaterial color="#6ea66b" roughness={0.85} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Contours() {
  const lines = useMemo(() => {
    const arr: number[][] = [];
    for (let r = 1; r <= 9; r++) {
      const pts: number[] = [];
      const segs = 96;
      for (let i = 0; i <= segs; i++) {
        const t = (i / segs) * Math.PI * 2;
        const radius = r * 0.95;
        pts.push(Math.cos(t) * radius, 0.015 + r * 0.004, Math.sin(t) * radius);
      }
      arr.push(pts);
    }
    return arr;
  }, []);
  return (
    <group>
      {lines.map((pts, i) => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
        return (
          <line key={i}>
            <primitive object={geo} attach="geometry" />
            <lineBasicMaterial color="#3b6fa0" transparent opacity={0.14 + i * 0.015} />
          </line>
        );
      })}
    </group>
  );
}

function Labels() {
  return (
    <>
      <Html position={[0, 2.8, 0]} center distanceFactor={10}>
        <div className="glass rounded-full px-3 py-1 text-[10px] font-medium text-foreground/80 whitespace-nowrap shadow-soft">
          ◉ Phase 01 · 124 plots
        </div>
      </Html>
      <Html position={[5.8, 1.8, -2]} center distanceFactor={10}>
        <div className="glass rounded-full px-3 py-1 text-[10px] font-medium text-foreground/80 whitespace-nowrap shadow-soft">
          Civic plaza
        </div>
      </Html>
      <Html position={[-4.8, 1.6, 3.8]} center distanceFactor={10}>
        <div className="glass rounded-full px-3 py-1 text-[10px] font-medium text-foreground/80 whitespace-nowrap shadow-soft">
          Greenbelt · 18 ha
        </div>
      </Html>
      <Html position={[-3.2, 0.6, 2.4]} center distanceFactor={10}>
        <div className="glass rounded-full px-3 py-1 text-[10px] font-medium text-foreground/80 whitespace-nowrap shadow-soft">
          Reflecting pond
        </div>
      </Html>
    </>
  );
}

function Rig() {
  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime() * 0.1;
    camera.position.x = Math.cos(t) * 15;
    camera.position.z = Math.sin(t) * 15;
    camera.position.y = 9.5 + Math.sin(t * 0.5) * 0.7;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Masterplan3D() {
  const grass = useMemo(() => makeGrassTexture(), []);
  const asphalt = useMemo(() => makeAsphaltTexture(), []);
  const windows = useMemo(() => makeWindowsTexture(), []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [15, 10, 15], fov: 38 }}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
    >
      <color attach="background" args={["#00000000"]} />
      <ambientLight intensity={0.55} />
      <directionalLight
        position={[10, 16, 6]}
        intensity={2.1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
      />
      <hemisphereLight args={["#cfe1ff", "#f5efe2", 0.5]} />

      <Suspense fallback={null}>
        <group position={[0, -0.5, 0]}>
          <Terrain map={grass} />
          <Contours />
          <Roads map={asphalt} />
          <Buildings windowsMap={windows} />
          <Trees />
          <Water />
          <Labels />
          <ContactShadows
            position={[0, 0.02, 0]}
            opacity={0.45}
            scale={28}
            blur={2.6}
            far={6}
          />
        </group>

        <Clouds material={THREE.MeshBasicMaterial}>
          <Cloud
            seed={1}
            segments={20}
            bounds={[10, 1.5, 6]}
            volume={5}
            color="#ffffff"
            position={[0, 7, -6]}
            opacity={0.5}
          />
          <Cloud
            seed={3}
            segments={16}
            bounds={[8, 1, 5]}
            volume={4}
            color="#eef3ff"
            position={[6, 8, 4]}
            opacity={0.4}
          />
        </Clouds>

        <Environment preset="city" />
      </Suspense>

      <Rig />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 3.2}
      />
    </Canvas>
  );
}
