const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('App is listening');
})

app.use(express.static("public"));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
});
app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html')
});