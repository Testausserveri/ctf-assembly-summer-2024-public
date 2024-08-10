import puppeteer from "puppeteer";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function check(id) {
    const browser = await puppeteer.launch({
        // required because docker
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.setCookie({
        name: "flag",
        value: process.env.FLAG ?? "flag{this_is_a_fake_flag}",
        domain: "localhost",
    });
    await page.goto("http://localhost:3000/paste/" + id);
    await sleep(5000);
    await page.close();
    await browser.close();
}
