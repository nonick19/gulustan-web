import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function WireKnot() {
  const mesh = useRef()
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.18
    mesh.current.rotation.y += delta * 0.25
  })
  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[1.05, 0.32, 160, 24]} />
        <meshStandardMaterial
          color="#7c5cff"
          emissive="#4c1d95"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  )
}

function ParticleField({ count = 900 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 14
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.03
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

function Rig() {
  useFrame((state) => {
    const { pointer, camera } = state
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.6, 0.05)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.4, 0.05)
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function HeroScene() {
  return (
    <div className="hero__canvas" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 4.2], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[4, 4, 4]} intensity={1.2} color="#7c5cff" />
        <pointLight position={[-4, -2, 2]} intensity={0.8} color="#22d3ee" />
        <WireKnot />
        <ParticleField />
        <Rig />
      </Canvas>
    </div>
  )
}
