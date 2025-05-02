const express = require('express')
const cors = require('cors')
const {v4:uuidv4} = require('uuid')
const sqlite3 = require('sqlite3').verbose()
const intSalt = 10;

const dbSource = "group_survey_project.db"
const HTTP_PORT = 8000
const db = new sqlite3.Database(dbSource)

var app = express()
app.use(cors())
app.use(express.json())

var arrItems = [];

//Registration route
app.post('/register', (req, res, next) => {
  let strUserId = uuidv4();
  let strEmail = req.body.email.trim().toLowerCase();
  let strPassword = req.body.password;
  let strFirstName = req.body.firstName.trim();
  let strLastName = req.body.lastName.trim();
  let strRole = req.body.role.trim();
  //let strRole = req.body.role;

  //Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(strEmail)) {
      return res.status(400).json({ error: "You must provide a valid email address" });
  }

  let blnError = false;

  //Password validation
  if (strPassword.length < 8) {
      blnError = true;
      return res.status(400).json({ error: "Password must be at least 8 characters long" });
  }
  if (!/[A-Z]/.test(strPassword)) {
      blnError = true;
      return res.status(400).json({ error: "Password must contain at least one uppercase letter" });
  }
  if (!/[a-z]/.test(strPassword)) {
      blnError = true;
      return res.status(400).json({ error: "Password must contain at least one lowercase letter" });
  }
  if (!/[0-9]/.test(strPassword)) {
      blnError = true;
      return res.status(400).json({ error: "Password must contain at least one number" });
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(strPassword)) {
      blnError = true;
      return res.status(400).json({ error: "Password must contain at least one special character" });
  }

  //First Name validation
  if (strFirstName.length < 3) {
      blnError = true;
      return res.status(400).json({ error: "First name must be at least 3 characters long" });
  }

  //Last Name validation
  if (strLastName.length < 3) {
      blnError = true;  
      return res.status(400).json({ error: "Last name must be at least 3 characters long" });
  }

  //Role validation
  const validRoles = ['teacher', 'student'];
  if (!validRoles.includes(strRole)) {
      blnError = true;
      return res.status(400).json({ error: "Role must be either 'teacher' or 'student'" });
  }

  //strPassword = bcrypt.hashSync(strPassword, intSalt);

  // If validations pass
  if(blnError == true){
      return res.status(400).json({ error: "Validation failed" });
  } else {
  req.body.userId = strUserId;
  //let strCommand = `INSERT INTO tblUsers VALUES ('${strUserId}', '${strEmail}', '${strFirstName}', '${strLastName}', '${strRole}', '${strPassword}')`;

  let strCommand = `INSERT INTO tblUsers VALUES (?, ?, ?, ?, ?, ?)`;
  let arrParams = [strUserId, strEmail, strFirstName, strLastName, strRole, strPassword];
  console.log(strCommand)
  db.run(strCommand, arrParams, function (err) {
      if(err){
          console.log(err)
          res.status(400).json({
              status:"error",
              message:err.message
          })
      } else {
          res.status(200).json({
              status:"success"
          })
      }
  })
  }
})

app.listen(HTTP_PORT, () => {
  console.log('App listening on',HTTP_PORT)
})