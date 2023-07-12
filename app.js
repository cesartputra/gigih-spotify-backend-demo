const express = require('express')
const path = require('path')
const app = express()
const routes = require('./routes/mainRoutes')
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.render("index", { title: "Spotify" });
})

app.use('/', routes)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))