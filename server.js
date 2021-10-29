import cron from "node-cron";
import { sendMessage } from "./utils/telegram.js";
import { checkGuinessStoreHouse } from "./apis/guinessNitrosurge.js";
import { checkIconnect } from "./apis/checkIconnect.js";

async function go() {
    checkGuinessStoreHouse();
    checkIconnect();
}
async function stillRunningNotify() {
    sendMessage("Backend job is still running in case you are wondering.. :) ", { disable_notification: true, dev: true });
}

cron.schedule("*/5 * * * *", go);
cron.schedule("0 * * * *", stillRunningNotify);
