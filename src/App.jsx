import React, { useState } from 'react'
import SVGUploader from './components/SVGUploader'
import AnimationEditor from './components/AnimationEditor'

function App() {
  const [svg, setSVG] = useState(null)

  const handleSVGLoad = (loadedSVG) => {
    setSVG(loadedSVG)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">SVG to Animated MP4 Converter</h1>
      <SVGUploader onSVGLoad={handleSVGLoad} />
      {svg && <AnimationEditor svg={svg} />}
    </div>
  )
}

export default App
