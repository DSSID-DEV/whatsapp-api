// const https = require('https')
// const fs = require('fs');
const app = require('./src/app')

const { baseWebhookURL } = require('./src/config')
require('dotenv').config()

// Start the server
const port = process.env.PORT || 3000

// const options = {
//   key: fs.readFileSync('/root/key.pem'),
//   cert: fs.readFileSync('/root/cert.pem'),
// };

// Check if BASE_WEBHOOK_URL environment variable is available
if (!baseWebhookURL) {
  console.error('BASE_WEBHOOK_URL environment variable is not available. Exiting...')
  process.exit(1) // Terminate the application with an error code
}


// https.createServer(options, app).listen(port, () => {
//   console.log('Servidor HTTPS rodando em https://<SEU_IP>:443');
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
