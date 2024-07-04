import dotenv from "dotenv";
dotenv.config();
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import axios from "axios";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase/firebase.config.js";

const app = express();
app.use(express.json());
// Allow requests from a specific origin
app.use(
  cors({
    origin: [
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
  res.send('Manivas Co-operation server is live.')

  /*const response = await axios.post(
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

  console.log(response.data);*/
});

app.post("/api/mpesa/accountbalance/queuetimeouturl", (req, res) => {
  console.log(req.body);
});
app.post("/api/mpesa/accountbalance/result", (req, res) => {
  console.log(req.body);
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
    CallBackURL: `${process.env.SERVER_BASE_URL}/api/mpesa/callback`,
    AccountReference: "Manivas Co-operation",
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
    console.error(error);
  }
});

app.post("/api/mpesa/callback", async (req, res) => {
  try{
    const docRef = await addDoc(collection(db, "transactions"), {
      body: req.body
    })
    console.info(`Transaction saved under id ${docRef.id}`)
  }catch(error){
    console.error(error)
  }
  //console.log(req.body)
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
app.get("/api/v1/mail/sendMail", (req, res) => {
  //const { email } = req.body;
  const email = "leorodwel86@gmail.com"

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
    html: 'Hello'
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({
        status: false,
        ...error,
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
    console.log('Manivas Co-operation server is live on port 3000')
});
