// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

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