import got from "got";
import { JSDOM } from "jsdom";

export async function scrapper({ url }) {
    const response = await got(url);
    const dom = new JSDOM(response.body);

    return dom;
}
