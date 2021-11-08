// importing packages
const express = require('express');
const path = require('path');

// declare static path
let staticPath = path.join(__dirname, "public");

//intializing express.js
const app = express();

//middlewares
app.use(express.static(staticPath));

app.listen(3000, () => {
  console.log('listening on port 3000.......');
})

app.use(express.json());

//routes
//home route
app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
})

app.get('/intro', (req, res) => {
  res.sendFile(path.join(staticPath, "intro.html"));
})

app.get('/lights', (req, res) => {
  res.sendFile(path.join(staticPath, "lights.html"));
})

app.get('/search-cards', (req, res) => {
  res.sendFile(path.join(staticPath, "search-cards.html"));
})

app.get('/swipe-card', (req, res) => {
  res.sendFile(path.join(staticPath, "swipe-card.html"));
})

app.get('/control-panel', (req, res) => {
  res.sendFile(path.join(staticPath, "control-panel.html"));
})

app.get('/outro', (req, res) => {
  res.sendFile(path.join(staticPath, "outro.html"));
})

// 404 route
app.get('/404', (req, res) => {
  res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
  res.redirect('/404');
})