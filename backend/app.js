import dotenv from "dotenv";
dotenv.config();
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import axios from "axios";
import moment from "moment";
import winston from "winston";
import { v4 as uuidv4 } from "uuid";
import { MPESA_CALLBACK_ORIGINS } from "./origins/mpesa_callback_origins/index.js";
//import Binance from 'node-binance-api'

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

const app = express();
app.use(express.json());
// Allow requests from a specific origin
app.use(
  cors({
    origin: [
      "https://mani-two.vercel.app",
      "http://localhost:5173",
      "https://www.manivas.com",
    ],
  })
);

const generateAccessToken = async () => {
  const response = await axios.get(
    `${process.env.MPESA_BASE_URL}/oauth/v1/generate`,
    {
      auth: {
        username: process.env.MPESA_CONSUMER_KEY,
        password: process.env.MPESA_CONSUMER_SECRET,
      },
      params: {
        grant_type: "client_credentials",
      },
    }
  );

  return response.data;
};

app.get("/", async (req, res) => {
  const { access_token } = await generateAccessToken();
  res.send(uuidv4());

  const response = await axios.post(
    `${process.env.MPESA_BASE_URL}/mpesa/accountbalance/v1/query`,
    {
      Initiator: "Manivas_Developer",
      SecurityCredential:
        "eoFs3Fc7KwO6hGee+NKP+YXYgf8FlM7KUn2Hor+gZekN35uF9DXsJbaEWGpMlVMe9/BZlLF+AZernhwOUEgQfvYRcpif751i+MXDwbRdTKdK3AJyi7TtyvI90F2H8SFqIrzzKaQ97wnkuDhbBXUr6sWvRCEgjafeHFBxIwa/9+yuLpyNZlqmDrliOmom2LFXqUoFnH1QnLZ7LwRAC4qbbCmROemVT0YARiFEkzrHRTcLYFJ+/HldalMTwq2vKNvE5hwxWlnYwRYiiMECjgJlFwLz0IiXpRyoTRAbwmcpg248KZIzYRmRulhtAfCLmnrITNNLNmuInr1lMWgOcxO7ew==",
      CommandID: "AccountBalance",
      PartyA: process.env.MPESA_SHORT_CODE,
      IdentifierType: "4",
      Remarks: "ok",
      QueueTimeOutURL: `${process.env.MPESA_BASE_URL}/api/mpesa/accountbalance/queuetimeouturl`,
      ResultURL: `${process.env.MPESA_BASE_URL}/api/mpesa/accountbalance/result`,
    },
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  console.log(response.data);
});

app.post("/api/mpesa/accountbalance/queuetimeouturl", (req, res) => {
  console.log(req.body);
});
app.post("/api/mpesa/accountbalance/result", (req, res) => {
  console.log(req.body);
});

//selecting all the users from the database
app.get("/users", (req, res) => {
  let sql = "SELECT * FROM users";
  conn.query(sql, (rows, err) => {
    if (err) {
      console.log(err);
    }
    res.send(rows);
  });
});

//selecting the users by a given parameter e.g email
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  let sql =
    "SELECT * FROM users WHERE email = '" +
    email +
    "' and password = '" +
    password +
    "' ";
  conn.query(sql, (err, rows, fields) => {
    if (err) {
      res.sendStatus(500).send("Failed to authenticate user!");
    } else if (rows[0] != null) {
      res.json({ statusCode: 200, metaData: { userId: rows[0].userId } });
    } else {
      res.json({ statusCode: 404 });
    }
  });
});

//adding a new user into the database
app.post("/users", (req, res) => {
  var userId = req.body.userId;
  var name = req.body.name;
  var email = req.body.email;
  var contact = req.body.contact;
  var password = req.body.password;

  let sql =
    "INSERT INTO users (userId, name, email, contact, password) VALUES ('" +
    userId +
    "', '" +
    name +
    "' , '" +
    email +
    "', '" +
    contact +
    "', '" +
    password +
    "')";
  conn.query(sql, (err, results) => {
    if (err) {
      res.sendStatus(500).send("Failed to register user!");
    }

    res.send(results);
  });
});

//fetching a specific user in manivas
app.post("/api/v1/manivas/users", (req, res) => {
  let sql = "SELECT * FROM users WHERE userId = '" + req.body.user + "'";
  conn.query(sql, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
});

//getting all the transactions done by one customer
app.post("/transactions", (req, res) => {
  var user = req.body.user;
  let sql = "SELECT * FROM mpesatransactions WHERE userId = '" + user + "'";
  conn.query(sql, (error, results) => {
    if (error) {
      res.send(error);
    }

    res.json(results);
  });
});

//initiating the stkPush
app.post("/api/mpesa/stkPush", async (req, res) => {
  const { phoneNumber, amount } = req.body;
  const { access_token } = await generateAccessToken();
  const timestamp = moment().format("YYYYMMDDHHmmss");
  const password = btoa(
    process.env.MPESA_SHORT_CODE + process.env.MPESA_PASSKEY + timestamp
  );
  const stkBody = {
    BusinessShortCode: process.env.MPESA_SHORT_CODE,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: phoneNumber,
    PartyB: process.env.MPESA_SHORT_CODE,
    PhoneNumber: phoneNumber,
    CallBackURL: process.env.MPESA_CALLBACK,
    AccountReference: "Manivas Pool Services",
    TransactionDesc: "Test",
  };

  try {
    const response = await axios.post(
      `${process.env.MPESA_BASE_URL}/mpesa/stkpush/v1/processrequest`,
      stkBody,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    res.status(200).send(response.data);
    console.log(response);
  } catch (error) {
    console.error(error.response);
  }
});

app.post("/api/mpesa/callback", (req, res) => {
  //getMpesaCallback(req.body);
  /*const callBackData = req.body;

  const resultCode = callBackData.Body.stkCallback.ResultCode;
  if (resultCode !== 0) {
    const err = callBackData.Body.stkCallback.ResultDesc;
    let responseData = { ResultCode: resultCode, ResultDesc: err };
    // Send an error response to the frontend
    return res.status(400).json(responseData);
  } else {
    const body = req.body.Body.stkCallback.CallbackMetadata;

    //save the data into th database
    let sql =
      "INSERT INTO mpesatransactions (transactionId, contact, amount, dot) VALUES ('" +
      body.Item[1].Value +
      "', '" +
      body.Item[4].Value +
      "', '" +
      body.Item[0].Value +
      "', '" +
      body.Item[3].Value +
      "')";
    conn.query(sql, (err, result) => {
      if (err) {
        throw err;
      } else {
        // Send a success response to the frontend
        res.status(200).json({ message: "Payment made successfully!" });
      }
    });
  }*/

  const tId = uuidv4();

  console.log(req.body);
});

/*INTEGRATING WITH BINANCE SERVER*/
/*const binance = new Binance().options({
    APIKEY: '',
  APISECRET: '',
})

//fetching the details of an account
binance.balance((error, balances)=>{
    if(!error){
        console.log(balances)
    }
})
*/

//API TO SEND MAIL
app.post("/api/v1/sendMessage", (req, res) => {
  const { email } = req.body;

  // Create a SMTP transporter
  const transporter = nodemailer.createTransport({
    host: "mail.manivas.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Define email message
  const mailOptions = {
    from: "verify@manivas.com",
    to: email,
    subject: "Test Email",
    html: `<p>Dear&nbsp;<span style="color: rgb(35, 111, 161);"><strong>{{user}}</strong></span>,</p>
<p>We are thrilled to inform you that your tickets for&nbsp;<strong><span style="color: rgb(35, 111, 161);">{{event}}</span></strong> have been successfully reserved. Below, you will find all the details pertaining to your ticket purchase:</p>
<p><strong>Event Details:</strong></p>
<ul>
<li>Event: <span style="color: rgb(35, 111, 161);"><strong>{{event}}</strong></span></li>
<li>Date: <span style="color: rgb(35, 111, 161);"><strong>{{date}}</strong></span></li>
<li>Time: <span style="color: rgb(35, 111, 161);"><strong>{{from_time}} - {{to_time}}</strong></span></li>
<li>Location: <span style="color: rgb(35, 111, 161);"><strong>{{location}}</strong></span></li>
</ul>
<p><strong>Ticket Details:</strong></p>
<ul>
<li>Regular Tickets: <span style="color: rgb(35, 111, 161);"><strong>{{regularTickets}}</strong></span></li>
<li>VIP Tickets: <span style="color: rgb(35, 111, 161);"><strong>{{vipTickets}}</strong></span></li>
</ul>
<p><strong>Pricing:</strong></p>
<ul>
<li>Regular Ticket Price: <span style="color: rgb(35, 111, 161);"><strong>{{regularTicketPrice}}</strong></span></li>
<li>VIP Ticket Price: <span style="color: rgb(35, 111, 161);"><strong>{{vipTicketPrice}}</strong></span></li>
<li>Total Amount: <span style="color: rgb(35, 111, 161);"><strong>{{totalAmount}}</strong></span></li>
</ul>
<p>Please note that payment can be made at the event entrance or through our online payment portal.</p>
<p>We look forward to welcoming you to&nbsp;<span style="color: rgb(35, 111, 161);"><strong>{{event}}</strong></span>, where an unforgettable journey awaits! Should you have any further inquiries or require assistance, please do not hesitate to contact us at <span style="color: rgb(35, 111, 161);"><strong>theeventvista@gmail.com</strong></span>.</p>
<p>Thank you for choosing to be a part of this extraordinary event!</p>
<p>&nbsp;</p>
<p>Best Regards,</p>
<p><strong>EventVista,</strong></p>
<p><span style="background-color: rgb(255, 255, 255); color: rgb(35, 111, 161);"><em><strong>Where Every Moment Shines!</strong></em></span></p>`,
    attachments: [
      {
        filename: "text.txt",
        path: "public/downloads/text.txt",
        contextType: "application/text",
      },
    ],
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({
        status: false,
        response: error,
      });
    } else {
      res.status(200).json({
        status: true,
        response: "Message sent successfully.",
      });
    }
  });
});



app.listen("3000", () => {
  console.log("Server listening on port 3000");
});
