const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');
const bodyParser = require("body-parser");
const PORT = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.post("/api/submit-registration", (req, res) => {
  const { rollNumber, kiitEmail, personalEmail, gender, mobileNumber, whatsappNumber } = req.body;
  if (
    !rollNumber ||
    !kiitEmail ||
    !personalEmail ||
    !gender ||
    !mobileNumber ||
    !whatsappNumber
  ) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  // Simulate saving to the database
  const newRegistration = {
    id:uuidv4(),
    rollNumber,
    kiitEmail,
    personalEmail,
    gender,
    mobileNumber,
    whatsappNumber,
  };

  return res.status(201).json({
    message: "Registration successful!",
    data: newRegistration,
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
