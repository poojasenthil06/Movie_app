const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

const movies = JSON.parse(
  fs.readFileSync("./server/movies_metadata.json","utf-8")
);

app.get("/api/movies",(req,res)=>{
  res.json(movies);
});

app.get("/api/movies/:id",(req,res)=>{
  const movie = movies.find(m=>m.id==req.params.id);
  if(!movie) return res.status(404).json({msg:"Not found"});
  res.json(movie);
});

app.listen(3000,()=>console.log("Server running"));
