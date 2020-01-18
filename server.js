// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================

db.Doctor.hasMany(db.Appointment, { foreignKey: 'doctor_id' })
db.Appointment.belongsTo(db.Doctor, { foreignKey: 'doctor_id', allowNull: false })

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
  db.Doctor.create({
    firstName: "Michael",
    lastName: "Phelps"
  })
  db.Doctor.create({
    firstName: "Jake",
    lastName: "Paul"
  })
  db.Appointment.create({
    firstName: "Tony",
    lastName: "Hawk",
    date: "01-01-2020",
    time: "09:15:00",
    kind: "New Patient",
    doctor_id: 1
  })
  db.Appointment.create({
    firstName: "Toni",
    lastName: "Hawke",
    date: "01-01-2020",
    time: "09:00:00",
    kind: "New Patient",
    doctor_id: 1
  })
  db.Appointment.create({
    firstName: "Jack",
    lastName: "Black",
    date: "01-01-2020",
    time: "09:30:00",
    kind: "New Patient",
    doctor_id: 2
  })
});
