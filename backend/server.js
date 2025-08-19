import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Twilio from "twilio";

dotenv.config();
const { TWILIO_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER, HOTEL_NOTIFY_PHONE, PORT = 3001 } = process.env;
if (!TWILIO_SID || !TWILIO_AUTH_TOKEN || !TWILIO_PHONE_NUMBER || !HOTEL_NOTIFY_PHONE) {
  console.error("⚠️ Missing Twilio env vars! Check your .env");
  process.exit(1);
}
const app = express();

// replace your app.use(cors(...)) with this:
const allowedOrigins = [
  "https://hotelsakthisrideluxe.com",
  "https://www.hotelsakthisrideluxe.com",
  "https://hotelsakthisrideluxe.onrender.com",
  "https://hotelsrisakthideluxe.com",
  "http://localhost:5173",
  "http://localhost:3000"
];

app.use(cors({
  origin: function(origin, callback){
    // allow non-browser requests (curl, some mobile SDKs)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      console.warn("Blocked CORS origin:", origin);
      return callback(new Error("Not allowed by CORS"));
    }
  }
}));


app.use(express.json());
const twilio = Twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);
app.post("/api/book", async (req, res) => {
  const { name, phone, dateIn, dateOut, guests, rooms } = req.body;
  if (!name || !phone || !dateIn || !dateOut || !guests || !rooms) {
    return res.status(400).json({ error: "Missing booking fields." });
  }
  try {
    await twilio.messages.create({
      body: `📩 Booking by ${name} 
      (${phone}): 
      CheckIn : ${dateIn},
      CheckOut : ${dateOut}, 
      ${guests}, 
      ${rooms}`,
      from: TWILIO_PHONE_NUMBER,
      to: HOTEL_NOTIFY_PHONE,
    });
    res.json({ success: true });
  } catch (err) {
    console.error("Twilio error:", err);
    res.status(500).json({ error: "Failed to send SMS." });
  }
});
app.listen(PORT, () => console.log(`🚀 SMS API on http://localhost:${PORT}`));
