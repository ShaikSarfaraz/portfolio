"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

const SkillCloud = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    const group = new THREE.Group()
    const loader = new THREE.TextureLoader()
    const icons = [
      "arduino",
      "azure",
      "bootstrap",
      "chrome",
      "css",
      "express",
      "figma",
      "git",
      "github",
      "html",
      "javascript",
      "jquery",
      "mongo",
      "nextjs",
      "nodejs",
      "photoshop",
      "python",
      "react",
      "rpi",
      "sass",
      "sql",
      "typescript",
      "vscode",
    ].map((i) => `./assets/${i}.svg`)
    const sprites: THREE.Sprite[] = []
    const radius = 27
    const spriteSize = 6

    renderer.setSize(375, 375)
    containerRef.current.appendChild(renderer.domElement)

    icons.forEach((path, index) => {
      loader.load(path, (texture: THREE.Texture) => {
        const phi = Math.acos(-1 + (2 * index) / icons.length)
        const theta = Math.sqrt(icons.length * Math.PI) * phi
        const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture }))
        sprite.scale.set(spriteSize, spriteSize, 1)
        sprite.position.set(
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi),
        )
        group.add(sprite)
        sprites.push(sprite)
      })
    })

    scene.add(group)
    camera.position.z = 50

    const raycaster = new THREE.Raycaster()
    let canvasRect = renderer.domElement.getBoundingClientRect()

    const updateCanvasRect = () => {
      canvasRect = renderer.domElement.getBoundingClientRect()
    }

    window.addEventListener("scroll", updateCanvasRect)
    window.addEventListener("resize", updateCanvasRect)

    containerRef.current.addEventListener("click", (event) => {
      const mouseX = event.clientX - canvasRect.left
      const mouseY = event.clientY - canvasRect.top
      if (mouseX >= 0 && mouseX <= 375 && mouseY >= 0 && mouseY <= 375) {
        const mousePosition = new THREE.Vector2((mouseX / 375) * 2 - 1, -(mouseY / 375) * 2 + 1)
        raycaster.setFromCamera(mousePosition, camera)
        const intersects = raycaster.intersectObjects(sprites)
        if (intersects.length > 0) {
          group.attach(intersects[0].object)
        }
      }
    })

    const mousePosition = new THREE.Vector2()

    containerRef.current.addEventListener("mousemove", (event) => {
      const rect = containerRef.current!.getBoundingClientRect()
      mousePosition.x = ((event.clientX - rect.left) / 375) * 2 - 1
      mousePosition.y = -((event.clientY - rect.top) / 375) * 2 + 1
    })

    const animate = () => {
      requestAnimationFrame(animate)
      group.rotation.y += 0.005 + mousePosition.x * 0.02
      group.rotation.x += mousePosition.y * 0.02
      group.children.forEach((child) => {
        if (child instanceof THREE.Sprite) {
          child.lookAt(camera.position)
        }
      })
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      window.removeEventListener("scroll", updateCanvasRect)
      window.removeEventListener("resize", updateCanvasRect)
    }
  }, [])

  return <div ref={containerRef} className="skill-tag-cloud w-[375px] h-[375px] mx-auto"></div>
}

export default SkillCloud

