import fetch from "isomorphic-fetch";
import { sendMessage } from "../utils/telegram.js";
import { scrapper } from "../utils/scrapper.js";

const iConnectUrl = "https://i-connect.ie/apple-watch-series-7-gps/";

const TEMPLATE = (soldOut) =>
    `
<b>${soldOut ? "Apple Watch is still SOLD OUT" : "ALERT!! Apple Watch is back in stock"}</b>
${soldOut ? "" : `<a href="${iConnectUrl}">Check it out</a>`}
`;

export async function checkIconnect() {
    const dom = await scrapper({ url: iConnectUrl });
    const x = [...dom.window.document.querySelectorAll(".product-info-main")];

    x.forEach((e) => {
        const stillSoldOut = e.innerHTML.toString().toLowerCase().includes("currently out of stock online");
        if (!stillSoldOut) {
            sendMessage(TEMPLATE(stillSoldOut), { disable_notification: true, dev: true });
        }
    });
}
