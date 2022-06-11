const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  idArtist: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  isFavorite: {
    type: String,
  },
  link: {
    type: String,
  },
  yearProduction: {
    type: String,
  },
  refrain: {
    type: String,
  },
  orderSong: {
    type: String,
  },
  paragraph1: {
    type: String,
  },
  paragraph2: {
    type: String,
  },
  paragraph3: {
    type: String,
  },
  paragraph4: {
    type: String,
  },
  paragraph5: {
    type: String,
  },
  paragraph6: {
    type: String,
  },
},{ timestamps: true });

const Song = mongoose.model("Song", SongSchema);

module.exports = Song;