// server.js at the root of your project
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from /home
app.use('/home', express.static(path.join(__dirname, 'home')));

// Serve static files from /home
app.use('/contact', express.static(path.join(__dirname, 'contact')));

// Serve static files from /images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve static files from /about
app.use('/about', express.static(path.join(__dirname, 'about')));

// Serve static files from /experience
app.use('/experience', express.static(path.join(__dirname, 'experience')));

// Serve static files from /projects
app.use('/projects', express.static(path.join(__dirname, 'projects')));

// Serve React app from /loading-bar-app/build 
app.use(express.static(path.join(__dirname, 'loading-bar-app', 'build')));

// Catch-all handler for React app
// It needs to be after all the specific routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'loading-bar-app', 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});