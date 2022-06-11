const mongoose = require("mongoose");

const ArtistSchema = new mongoose.Schema({
  idArtist: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  belongsTo: {
    type: String,
  },
  photo: {
    type: String,
  },
},
{ timestamps: true },
);

const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;