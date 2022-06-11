const express = require("express");
const AboutModel = require("../models/about");
const app = express();

app.get("/abouts", async (request, response) => {
  const abouts = await AboutModel.find({});

  try {
    response.send(abouts);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
app.post("/about", async (request, response) => {
    const about = new AboutModel(request.body);
  
    try {
      await about.save();
      response.send(about);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.patch("/about/:id", async (request, response) => {
    try {
      await AboutModel.findByIdAndUpdate(request.params.id, request.body);
      await AboutModel.save();
      response.send(about);
    } catch (error) {
      response.status(500).send(error);
    }
  });


  app.delete("/about/:id", async (request, response) => {
    try {
      const about = await AboutModel.findByIdAndDelete(request.params.id);
  
      if (!about) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.get("/aboutOne/:id", async (request, response) => {
    const abouts = await AboutModel.findById(request.params.id);
    try {
      response.send(abouts);
    } catch (error) {
      response.status(500).send(error);
    }
  });