import { checkGuinessStoreHouse } from "./apis/guinessNitrosurge.js";
import { sendMessage } from "./utils/telegram.js";

checkGuinessStoreHouse();
sendMessage("Backend job is still running in case you are wondering.. :) ", { disable_notification: true, dev: true });
