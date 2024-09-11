const app = require('./src/app')
const { baseWebhookURL } = require('./src/config')
const https = require('https')
require('dotenv').config()

// Start the server
const port = process.env.PORT || 3000

// Check if BASE_WEBHOOK_URL environment variable is available
if (!baseWebhookURL) {
  console.error('BASE_WEBHOOK_URL environment variable is not available. Exiting...')
  process.exit(1) // Terminate the application with an error code
}

https.createServer(app.options, app).listen(port, () => {
  console.log(`Server running on port ${port}`)
})
//app.listen(port, () => {
//  console.log(`Server running on port ${port}`)
//})
