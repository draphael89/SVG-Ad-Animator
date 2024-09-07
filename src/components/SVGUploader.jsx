import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import * as SVG from 'svg.js'
import DOMPurify from 'dompurify'

function SVGUploader({ onSVGLoad }) {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]
    const reader = new FileReader()

    reader.onload = (event) => {
      const svgContent = event.target.result
      const sanitizedSVG = DOMPurify.sanitize(svgContent)
      const draw = SVG(document.createElement('div')).svg(sanitizedSVG)
      onSVGLoad(draw)
    }

    reader.readAsText(file)
  }, [onSVGLoad])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/svg+xml' })

  return (
    <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the SVG file here ...</p> :
          <p>Drag 'n' drop an SVG file here, or click to select a file</p>
      }
    </div>
  )
}

export default SVGUploader
