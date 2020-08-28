const { Router } = require('express')

const router = Router()

// Test route
router.use('/test', async (req, res) => {

  import {createConnection} from "typeorm";
  const connection = await createConnection();

  res.end('Test API!')
})

module.exports = router
