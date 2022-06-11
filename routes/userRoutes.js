const express = require("express");
const UserModel = require("../models/user");
const app = express();

app.get("/users", async (request, response) => {
  const users = await UserModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
app.post("/user", async (request, response) => {
    const user = new UserModel(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.patch("/user/:id", async (request, response) => {
    try {
      await UserModel.findByIdAndUpdate(request.params.id, request.body);
      await UserModel.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
  });


  app.delete("/user/:id", async (request, response) => {
    try {
      const user = await UserModel.findByIdAndDelete(request.params.id);
  
      if (!user) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.get("/userOne/:id", async (request, response) => {
    const users = await UserModel.findById(request.params.id);
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  app.post("/login", async (request, response) => {
    const username=request.body.username;
    const password=request.body.password;

    const user = await UserModel.find({username:username, password:password})
    try {
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
   
  });