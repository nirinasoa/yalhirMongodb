const express = require("express");
const SongModel = require("../models/song");
const app = express();

app.get("/songs", async (request, response) => {
  const songs = await SongModel.find({}).sort({createdAt:-1});

  try {
    response.send(songs);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
app.post("/song", async (request, response) => {
    const song = new SongModel(request.body);
  
    try {
      await song.save();
      response.send(song);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.patch("/song/:id", async (request, response) => {
    try {
      await SongModel.findByIdAndUpdate(request.params.id, request.body);
      await SongModel.save();
      response.send(song);
    } catch (error) {
      response.status(500).send(error);
    }
  });


  app.delete("/song/:id", async (request, response) => {
    try {
      const song = await SongModel.findByIdAndDelete(request.params.id);
  
      if (!song) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.get("/songOne/:id", async (request, response) => {
    const songs = await SongModel.findById(request.params.id);
    try {
      response.send(songs);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.get("/songArtist/:id", async (request, response) => {
    const artists = await SongModel.find({idArtist:request.params.id});
    try {
      response.send(artists);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.post("/searchsong", async (request, response) => {
    const regex = new RegExp(request.body.search, 'i');  // 'i' makes it case insensitive
    const songs = await SongModel.find({$or: [{ title: regex }, { paragraph1: regex }, { paragraph2: regex }, { paragraph3: regex }, { paragraph4: regex }, { paragraph5: regex }, { paragraph6: regex }]});
     try {
      response.send(songs);
      } catch (error) {
      response.status(500).send(error);
    }  
  });

  app.post("/searchsongByArtist", async (request, response) => {
    const regex = new RegExp(request.body.search, 'i');  // 'i' makes it case insensitive
    const songs = await SongModel.find({$and: [{
      $or: [{ title: regex }, { paragraph1: regex }, { paragraph2: regex }, { paragraph3: regex }, { paragraph4: regex }, { paragraph5: regex }, { paragraph6: regex }]
    },
    { $or: [ { idArtist:request.body.idArtist} ] }
    ]})
    try {
      response.send(songs);
      } catch (error) {
      response.status(500).send(error);
    }  
  });
