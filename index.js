// import * as express from "express";
const express = require("express");

const app = express();

app.listen(3002, () => {
  console.log("Listen on http://localhost:3002");
});
