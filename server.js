const express = require("express");
const path = require("path");

const app = express();

app.enable("strict routing");

app.use((req, res, next) => {
    res.set({ "Cache-Control": "public, max-age=300, s-maxage=600" });
    next();
});

app.use("/docs", express.static(path.join(__dirname, "build")));

app.listen(8080);