require("dotenv").config();
const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    ignoreHTTPSErrors: true,
    args: [
      "--window-size=800,800",
      "--no-service-autorun",
      "--start-maximized",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--disable-web-security",
      "--disable-features=IsolateOrigins",
      "--disable-site-isolation-trials",
      "--window-position=0,0",
      "--disable-infobars",
      "--disable-notifications",
    ],
    //Caso queira utilizar um navegador específico
    // executablePath:
    //   "C:\\Seu\\Diretório\\do\\navegador\\chrome.exe",
  });
  const page = await browser.newPage();
  await page.goto(
    "https://www.linkedin.com/login/pt?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
  );
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const login = process.env.LINKEDIN_LOGIN;
  const inputEmail = await page.$("input[type=text]");
  await inputEmail.click();
  await inputEmail.type(`${login}`);

  const password = process.env.LINKEDIN_PASSWORD;
  const inputPassword = await page.$("input[type=password]");
  await inputPassword.click();
  await inputPassword.type(`${password}`);

  let signInBtn = await page.waitForSelector(".btn__primary--large");
  await signInBtn.click();

  await page.waitForNavigation({
    waitUntil: "domcontentloaded",
  });
  await page.waitForFunction(() => {
    return (
      window.location.href ===
      "https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"
    );
  });

  const profiles = JSON.parse(fs.readFileSync("profiles.json"));

  for (const link of profiles) {
    await page.goto(link);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await page.waitForSelector(
      ".artdeco-button.artdeco-button--2.artdeco-button--primary.ember-view.pvs-profile-actions__action"
    );
    const button = await page.$(
      ".artdeco-button.artdeco-button--2.artdeco-button--primary.ember-view.pvs-profile-actions__action"
    );
    await button.click();

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const message = process.env.MESSAGE_TO_SEND;
    const textArea = await page.$(".msg-form__contenteditable");
    const name = await page.$eval(
      ".text-heading-xlarge",
      (element) => element.textContent
    );
    const firstName = name.split(" ")[0];
    console.log(`${firstName}'s profile is starting`);
    await textArea.type(`Olá, ${firstName}!\n`);
    await textArea.type(message);
    await new Promise((resolve) => setTimeout(resolve, 4000));
    await page.waitForSelector(
      ".msg-form__send-button.artdeco-button.artdeco-button--1"
    );
    const sendMsg = await page.$(
      ".msg-form__send-button.artdeco-button.artdeco-button--1"
    );
    await sendMsg.click();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await page.waitForSelector(
      ".msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view"
    );
    const closeButton = await page.$(
      ".msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view"
    );
    console.log(`${firstName} is done :)`);

    await closeButton.click();
  }
  console.log("All Done :D");
  await browser.close();
})();
