import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function AnimationEditor({ svg }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (svg && containerRef.current) {
      containerRef.current.innerHTML = ''
      containerRef.current.appendChild(svg.node)

      // Example animation
      gsap.to(containerRef.current.querySelector('svg'), {
        duration: 2,
        rotation: 360,
        scale: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })
    }
  }, [svg])

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Animation Preview</h2>
      <div ref={containerRef} className="border border-gray-300 rounded-lg p-4"></div>
    </div>
  )
}

export default AnimationEditor
