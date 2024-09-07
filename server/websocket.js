function setupWebSocket(wss) {
  wss.on('connection', (ws) => {
    console.log('Client connected')

    ws.on('message', (message) => {
      console.log('Received:', message)
      // Handle messages here
    })

    ws.on('close', () => {
      console.log('Client disconnected')
    })
  })
}

module.exports = { setupWebSocket }
