const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json()) // allow us to send raw json
app.use(express.urlencoded({ extended: false })) // accept the url-encoded form

app.get('/', (req, res) => {
  res.status(200).json({ message: "Welcome to the support desk api" })
})

// Routes
app.use("/api/users", require('./routes/userRoutes'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
