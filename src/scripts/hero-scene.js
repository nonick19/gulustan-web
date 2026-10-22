import * as THREE from 'three'

// Hero arka plan sahnesi: tel kafes düğüm + parçacık alanı + imleç paralaksı.
// three.js ana paketten ayrı yüklenir (dinamik import, Hero.astro içinden).
export function initHeroScene(container) {
  if (!container || !window.WebGLRenderingContext) return

  let renderer
  try {
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
  } catch {
    return
  }

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100)
  camera.position.set(0, 0, 4.2)

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
  container.appendChild(renderer.domElement)

  scene.add(new THREE.AmbientLight(0xffffff, 0.4))

  const warmLight = new THREE.PointLight(0xd96c45, 1.2)
  warmLight.position.set(4, 4, 4)
  scene.add(warmLight)

  const amberLight = new THREE.PointLight(0xe9b44c, 0.8)
  amberLight.position.set(-4, -2, 2)
  scene.add(amberLight)

  const knot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(1.05, 0.32, 160, 24),
    new THREE.MeshStandardMaterial({
      color: 0xd96c45,
      emissive: 0x7a3327,
      emissiveIntensity: 0.5,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    }),
  )
  scene.add(knot)

  const count = 900
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * 14
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const points = new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      color: 0xe9b44c,
      size: 0.035,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
    }),
  )
  scene.add(points)

  const pointer = { x: 0, y: 0 }
  const onPointerMove = (event) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1
    pointer.y = -((event.clientY / window.innerHeight) * 2 - 1)
  }
  window.addEventListener('pointermove', onPointerMove, { passive: true })

  const resize = () => {
    const width = container.clientWidth || 1
    const height = container.clientHeight || 1
    renderer.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }
  resize()
  window.addEventListener('resize', resize)

  const clock = new THREE.Clock()
  let time = 0

  const tick = () => {
    requestAnimationFrame(tick)
    const delta = Math.min(clock.getDelta(), 0.05)
    time += delta

    // Yumuşak süzülme + dönüş
    knot.rotation.x += delta * 0.18
    knot.rotation.y += delta * 0.25
    knot.position.y = Math.sin(time * 1.6) * 0.15

    points.rotation.y += delta * 0.03

    // İmleç paralaksı
    camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.05
    camera.position.y += (pointer.y * 0.4 - camera.position.y) * 0.05
    camera.lookAt(0, 0, 0)

    if (!document.hidden) renderer.render(scene, camera)
  }
  tick()
}