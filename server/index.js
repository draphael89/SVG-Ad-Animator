const express = require('express')
const http = require('http')
const WebSocket = require('ws')
const path = require('path')
const { setupWebSocket } = require('./websocket')
const { renderSVG } = require('./renderer')

const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

app.use(express.static(path.join(__dirname, '../dist')))

setupWebSocket(wss)

app.post('/render', async (req, res) => {
  try {
    const result = await renderSVG(req.body.svg, req.body.animation)
    res.json({ success: true, result })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
