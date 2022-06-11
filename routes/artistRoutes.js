const express = require("express");
const ArtistModel = require("../models/artist");
const app = express();

app.get("/artists", async (request, response) => {
  const artists = await ArtistModel.find({}).sort({createdAt:-1});

  try {
    response.send(artists);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
app.post("/artist", async (request, response) => {
    const artist = new ArtistModel(request.body);
  
    try {
      await artist.save();
      response.send(artist);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.patch("/artist/:id", async (request, response) => {
    try {
      await ArtistModel.findByIdAndUpdate(request.params.id, request.body);
      await ArtistModel.save();
      response.send(artist);
    } catch (error) {
      response.status(500).send(error);
    }
  });


  app.delete("/artist/:id", async (request, response) => {
    try {
      const artist = await ArtistModel.findByIdAndDelete(request.params.id);
  
      if (!artist) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.get("/artistOne/:id", async (request, response) => {
    const artists = await ArtistModel.findById(request.params.id);
    try {
      response.send(artists);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.get("/artistByIdArtist/:id", async (request, response) => {
    const artists = await ArtistModel.find({idArtist: request.params.id});
    try {
      response.send(artists);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.post("/searchartist", async (request, response) => {
    const regex = new RegExp(request.body.search, 'i');  // 'i' makes it case insensitive
    const artists = await ArtistModel.find({$or: [{ username: regex }, { belongsTo: regex }]});
     try {
      response.send(artists);
      } catch (error) {
      response.status(500).send(error);
      }
  });