const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, () => {
    console.log('Corriendo en puerto 3000');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/home.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/login.html'));
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.sendFile(path.resolve(__dirname, './src/views/home.html'));
});

app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/register.html'));
});
app.post("/register", (req, res) => {
    console.log(req.body);
    res.sendFile(path.resolve(__dirname, './src/views/home.html')); /*res.send("Te registraste exitosamente")*/
})