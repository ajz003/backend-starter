# backend (Parts of README taken from https://github.com/lahuang4/nodejs-mysql-starter-kit)

## Prerequisites
* [Node.js and NPM](https://nodejs.org/en/)
* [MySQL](https://dev.mysql.com/downloads/installer/)

## Quick setup
1. `npm install` to install the necessary packages.
2. `node server.js` to start up your app! Runs on http://localhost:8080

## Sample HTTP requests

### Get a list of all doctors
```
http://localhost:8080/api/doctors/
```

### Get a list of all appointments for a particular doctor (id: 1) and particular day

```
http://localhost:8080/api/doctors/1/01-01-2020
```

### Delete an existing appointment (id:1) from a doctor's calendar

```
http://localhost:8080/api/appointments/1
```

### Add a new appointment to a doctor's calendar

Make a POST to `http://localhost:8080/api/appointments/`

with the request body (example):

```
{
	"doctor_id": 1,
	"date": "1-1-2020",
    "datetime": "1-1-2020 09:15:00",
	"firstName": "Tony",
	"lastName": "Montana",
	"kind": "New Patient"
}
```

// TO:DO date field on appointments is redundant and should be replaced with datetime, eventually