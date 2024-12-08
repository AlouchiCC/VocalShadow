const express = require("express");
const app = express();

const port = 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.all('*', (req, res) => {
    res.status(404).sendFile(__dirname + "/404.html");
});