import fetch from "isomorphic-fetch";
import { sendMessage } from "../utils/telegram.js";
import { scrapper } from "../utils/scrapper.js";

const guinessNitrosurgeUrl = "https://shop.guinness-storehouse.com/products/guinness-nitrosurge-gift-pack";

const TEMPLATE = (soldOut) =>
    `
<b>${soldOut ? "Nitrosurge is still SOLD OUT" : "ALERT!! Nitrosurge is back in stock"}</b>
${soldOut ? "" : `<a href="${guinessNitrosurgeUrl}">Check it out</a>`}
`;

export async function checkGuinessStoreHouse() {
    console.log("Starting up...");

    const dom = await scrapper({ url: guinessNitrosurgeUrl });
    const x = [...dom.window.document.querySelectorAll(".product-wrap")];

    x.forEach((e) => {
        const stillSoldOut = e.innerHTML.toString().toLowerCase().includes("sold out");
        if (!stillSoldOut) {
            sendMessage(TEMPLATE(stillSoldOut), { disable_notification: true, dev: true });
        }
    });
}
