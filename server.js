const express = require("express");
const path = require("path");

const app = express();

app.enable("strict routing");

app.use((req, res, next) => {
    res.set({ "Cache-Control": "public, max-age=20, s-maxage=30" });
    next();
});

app.use("/docs", express.static(path.join(__dirname, "build")));

app.listen(8080);