const wdio = require("webdriverio");
const assert = require("chai").assert;

const opts = {
    path: "/wd/hub",
    port: 4723,
    capabilities: {
        platformName: "Android",
        platformVersion: "8",
        deviceName: "Android Emulator",
        browserName: "chrome",
        automationName: "UiAutomator2",
    },
};

describe("Amazon Login", function () {
    it("Login with correct credentials", async function () {
        // Navigate to google.com
        const client = await wdio.remote(opts);
        await client.url("https://www.amazon.com");
        await (await client.$("#nav-logobar-greeting")).click();
        const emailField = await client.$("#ap_email_login");
        await emailField.setValue("cesarlopez2808@gmail.com");

        await (await client.$("#continue input[type=submit]")).click();
        const passwordField = await client.$("#ap_password");
        await passwordField.setValue("calt2808");

        await (await client.$("#signInSubmit")).click();

        const title = await client.getTitle();
        assert.equal(title, "Confirma tu identidad");
        await client.deleteSession();
    });
});
