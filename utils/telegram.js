import { config } from "dotenv";
config();
import fetch from "isomorphic-fetch";

// const TEMPLATE = ({ name, email, edu, country, phone, cancel, reschedule, startDate }) =>
//     `

// <b>ALERT!! NEW CONSULTATION HAS BEEN BOOKED</b>
// <pre>Date: <code>${startDate}</code> </pre>
// <pre>Name: <code>${name}</code> </pre>
// <pre>Email: <code>${email}</code> </pre>
// ${phone && `<pre>Phone: <a href="tel:${phone}">${phone}</a></pre>`}
// ${edu && `<pre>Education: <code>${edu}</code></pre>`}
// ${country && `<pre>Preferred country: <code>${country}</code></pre>`}
// <a href="${cancel}">CANCEL</a>
// <a href="${cancel}">RESCHEDULE</a>

// `);

const telegram = (message) => `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=@${process.env.CHAT_ID}&parse_mode=HTML&text=${message}`;

export async function sendMessage(message, options = {}) {
    const parseMessage = encodeURIComponent(message);

    const res = await fetch(telegram(parseMessage));
    // console.log("🚀 ~ file: telegram.js ~ line 17 ~ sendMessage ~ x ", res);
}
