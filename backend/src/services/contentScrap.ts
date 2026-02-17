import puppeteer, { Browser, Page } from "puppeteer";

export default async function scrapContent(url: string): Promise<string[]> {
  let browser: Browser | null = null;

  try {
    browser = await puppeteer.launch({ headless: true });
    const page: Page = await browser.newPage();

    await page.setRequestInterception(true);

    page.on("request", (req) => {
      const type = req.resourceType();
      if (["image", "font", "media"].includes(type)) {
        req.abort();
      } else {
        req.continue();
      }
    });

    await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });

    const textContent: string[] = await page.evaluate(() => {
      return Array.from(
        document.querySelectorAll<HTMLElement>("h1, h2, h3, p, a")
      )
        .map((el) => el.textContent?.trim())
        .filter((text): text is string => Boolean(text));
    });

    return textContent;
  } finally {
    if (browser) await browser.close();
  }
}
