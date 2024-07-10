const express = require('express')

app.set('view engine', 'html')
app.get('/', (req, res) => {
  res.send('Hola mundo!')
})
app.use(express.urlencoded({extended: true}))

