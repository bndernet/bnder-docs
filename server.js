const express = require("express");
const path = require("path");
require("dotenv")
    .config();

const clientCache = process.env.CLIENT_CACHE_DURATION ?? "300";
const cdnCache = process.env.CDN_CACHE_DURATION ?? "600"

const app = express();
app.use((req, res, next) => {
    res.set({ "Cache-Control": `public, max-age=${clientCache}, s-maxage=${cdnCache}` });
    next();
});
app.use("/docs", express.static(path.join(__dirname, "build")));
app.listen(8080);