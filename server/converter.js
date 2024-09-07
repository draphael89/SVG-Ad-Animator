const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

function convertToMP4(framesDir, outputFile) {
  return new Promise((resolve, reject) => {
    const command = `ffmpeg -framerate 30 -i ${framesDir}/frame_%d.png -c:v libx264 -pix_fmt yuv420p ${outputFile}`

    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error)
      } else {
        resolve(outputFile)
      }
    })
  })
}

module.exports = { convertToMP4 }
