// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our model
var db = require("../models");

var moment = require('moment');

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the doctors
  app.get("/api/doctors/", function (req, res) {
    db.Doctor.findAll({})
      .then(function (dbDoctor) {
        res.json(dbDoctor);
      });
  });

  // GET route for retrieving an appointment for a particular doctor and particular day
  app.get("/api/doctors/:id/:date", function (req, res) {
    db.Appointment.findAll({
      where: {
        doctor_id: req.params.id,
        date: req.params.date
      }
    })
      .then(function (dbAppointment) {
        res.json(dbAppointment);
      });
  });

  // POST route for adding a new appointment
  app.post("/api/appointments/", function (req, res) {

    db.Appointment.findAll({
      where: {
        doctor_id: req.body.doctor_id,
        date: req.body.date,
        time: req.body.time
      }
    })
      .then(function (dbAppointment) {
        var timeValidator = moment(req.body.time).minutes()

        if (timeValidator === 00 ||
          timeValidator === 15 ||
          timeValidator === 30 ||
          timeValidator === 45 ||
          timeValidator === 60) {

          if (dbAppointment.length <= 2) {
            db.Appointment.create({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              date: req.body.date,
              time: req.body.time,
              kind: req.body.kind,
              doctor_id: req.body.doctor_id
            })
              .then(function (dbAppointment) {
                res.json(dbAppointment);
              });
          } else {
            res.send("Already 3 appointments at this time slot!")
          }
        } else {
          res.send("Only appointments every 15 minutes are availalble!")
        }
      });

  });

  // DELETE route for deleting posts
  app.delete("/api/appointments/:id", function (req, res) {
    db.Appointment.destroy({
      where: {
        appointment_id: req.params.id
      }
    })
      .then(function (dbAppointment) {
        res.json(dbAppointment);
      });
  })
}